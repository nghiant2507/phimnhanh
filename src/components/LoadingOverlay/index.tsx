'use client';

import { useEffect, useState } from 'react';

import { cn } from '~/core/lib/utils';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  className?: string;
  duration?: number;
}

const LoadingOverlay = ({
  isLoading,
  message = 'Đang tải phim...',
  className,
  duration = 3000,
}: LoadingOverlayProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, duration / 100);

      const timer = setTimeout(() => {
        setShowLoading(false);
        setProgress(0);
      }, duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    } else {
      setShowLoading(false);
      setProgress(0);
    }
  }, [isLoading, duration]);

  if (!showLoading) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-xl',
        className,
      )}
      role="alert"
      aria-label="Loading overlay"
      aria-busy="true"
    >
      {/* Animated background */}
      <div className={'absolute inset-0 overflow-hidden'}>
        <div
          className={
            'absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-gradient-to-r from-transparent via-red-500/10 to-transparent'
          }
        />
      </div>

      {/* Content */}
      <div className={'relative z-10 flex flex-col items-center'}>
        {/* Logo */}
        <div className={'mb-12 text-center'}>
          <h1 className={'text-5xl font-bold text-white mb-4 tracking-wider'}>
            Phim<span className={'text-red-500'}>Nhanh</span>
          </h1>
          <div
            className={
              'h-1 w-40 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full mx-auto'
            }
          />
        </div>

        {/* Loading animation */}
        <div className={'relative w-32 h-32 mb-12'}>
          <div
            className={
              'absolute inset-0 rounded-full border-4 border-red-500/30 shadow-lg shadow-red-500/20'
            }
          />
          <div
            className={
              'absolute inset-0 rounded-full border-4 border-t-red-500 animate-spin shadow-lg shadow-red-500/20'
            }
          />
          <div
            className={
              'absolute inset-3 rounded-full border-4 border-red-600/30 shadow-lg shadow-red-600/20'
            }
          />
          <div
            className={
              'absolute inset-3 rounded-full border-4 border-l-red-600 animate-spin shadow-lg shadow-red-600/20'
            }
            style={{ animationDelay: '-0.5s' }}
          />
          <div
            className={
              'absolute inset-6 rounded-full border-4 border-red-700/30 shadow-lg shadow-red-700/20'
            }
          />
          <div
            className={
              'absolute inset-6 rounded-full border-4 border-b-red-700 animate-spin shadow-lg shadow-red-700/20'
            }
            style={{ animationDelay: '-1s' }}
          />
        </div>

        {/* Message and dots */}
        <div className={'text-center space-y-6'}>
          <p className={'text-xl font-medium text-white/90 tracking-wide'}>
            {message}
          </p>
          <div className={'flex items-center justify-center gap-3'}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={
                  'w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 animate-bounce shadow-lg shadow-red-500/20'
                }
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div
          className={
            'w-72 h-1.5 bg-white/10 rounded-full mt-12 overflow-hidden backdrop-blur-sm'
          }
        >
          <div
            className={
              'h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full shadow-lg shadow-red-500/20 transition-all duration-300 ease-out'
            }
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/70 mt-2 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
