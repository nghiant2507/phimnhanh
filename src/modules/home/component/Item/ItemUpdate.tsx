import { HeartIcon, PlayIcon, StarIcon } from 'lucide-react';

import { cn } from '~/core';
import { Button } from '~/core/ui/button';
import { MovieEntity } from '~/types';

export const ItemUpdate = ({
  item,
  isActive,
}: {
  item: MovieEntity;
  isActive: boolean;
}) => {
  return (
    <article
      className={
        'relative size-full flex flex-col items-center justify-center md:justify-start md:flex-row gap-10 p-4 md:p-8 md:min-h-[600px]'
      }
    >
      {/* Background image and overlay */}

      <figure className={'absolute inset-0 z-0'}>
        <img
          src={item?.thumb_url}
          className={'size-full object-cover object-center'}
          alt={item.name}
        />
        <div className="absolute top-0 left-0 size-full bg-gradient-to-b  from-transparent to-black"></div>
        <div
          className={
            'hidden md:block absolute inset-0 pointer-events-none opacity-30'
          }
          style={{
            backgroundImage:
              'radial-gradient(rgb(0, 0, 0) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
          }}
        ></div>
      </figure>
      <figure
        className={cn(
          'relative w-72 md:w-80 aspect-[2/3] rounded-lg overflow-hidden block transition-all duration-700',
          {
            'opacity-0 scale-80': !isActive,
            'opacity-100 scale-100': isActive,
          },
        )}
      >
        <img
          src={item?.poster_url}
          className={
            'size-full object-cover object-center brightness-85 shadow-lg'
          }
          alt={item.name}
        />
      </figure>
      {/* Content Section */}
      <div
        className={cn(
          'relative flex flex-col gap-2 transition-all duration-700 w-full ',
          {
            'opacity-0 translate-y-5': !isActive,
            'opacity-100 translate-y-0': isActive,
          },
        )}
      >
        {/* Main Title */}
        <h2
          className={
            'text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg'
          }
        >
          {item.name}
        </h2>

        <div className={'flex items-center gap-2 text-white/90'}>
          <h3 className={'text-lg md:text-xl lg:text-2xl font-bold text-white'}>
            {item.origin_name}
          </h3>
          <span className="text-lg">({item.year})</span>
          {item.tmdb.vote_average > 0 && (
            <div className={'flex items-center text-white'}>
              <span className={'text-sm mr-1 font-semibold'}>
                {item.tmdb.vote_average.toFixed(1)}
              </span>
              <StarIcon size={16} strokeWidth={3} />
            </div>
          )}
        </div>

        {/* Type and Current Episode */}
        <div
          className={
            'flex flex-wrap items-center gap-2 text-white font-semibold '
          }
        >
          <span className={'text-sm p-2 bg-white/10 md:bg-black/60 rounded-md'}>
            {item?.lang}
          </span>
          <span className={'text-sm p-2 bg-white/10 md:bg-black/60 rounded-md'}>
            {item.type === 'single' ? 'Phim Lẻ' : 'Phim Bộ'}
          </span>
          <span className={'text-sm p-2 bg-white/10 md:bg-black/60 rounded-md'}>
            {item.episode_current}
          </span>
          <span className={'text-sm p-2 bg-white/10 md:bg-black/60 rounded-md'}>
            {item.time}
          </span>
        </div>

        {/* Categories */}
        <div className={'flex flex-wrap items-center gap-2 text-white'}>
          {item?.category?.map((category) => (
            <span
              key={category?.id}
              className={'text-sm p-2 bg-black/60 rounded-md'}
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* Watch Button */}
        <div className={'flex flex-wrap items-center gap-2 mt-4'}>
          <Button className={'cursor-pointer'}>
            <PlayIcon size={20} color={'white'} />
            <span>Xem Phim</span>
          </Button>
          <Button
            className={
              'cursor-pointer bg-yellow-500 hover:bg-yellow-700 flex-1 md:flex-0'
            }
          >
            <HeartIcon size={20} color={'white'} />
            <span>Yêu thích</span>
          </Button>
        </div>
      </div>
    </article>
  );
};
