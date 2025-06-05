'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { AppSidebar } from '~/components';
import { SidebarInset, SidebarProvider } from '~/core/ui/sidebar';

import LoadingOverlay from '../LoadingOverlay';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className={'@container/main flex flex-1 flex-col h-full'}>
          {children}
        </div>
        <footer
          className={
            'text-center py-6 border-t border-border mt-12 text-accent-foreground text-sm'
          }
        >
          <p>&copy; 2025 PhimNhanh. All rights reserved.</p>
          <div className="mt-2.5">
            <a
              href="#"
              className={
                'text-text-muted no-underline mx-4 transition-colors duration-300 ease-in-out hover:text-red-primary'
              }
            >
              Về chúng tôi
            </a>
            <a
              href="#"
              className={
                'text-text-muted no-underline mx-4 transition-colors duration-300 ease-in-out hover:text-red-primary'
              }
            >
              Chính sách bảo mật
            </a>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
};

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, isFirstLoad]);

  if (isLoading) {
    return (
      <LoadingOverlay
        isLoading={true}
        message="Đang tải trang..."
        duration={3000}
      />
    );
  }

  return <>{children}</>;
};

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Suspense
      fallback={
        <LoadingOverlay
          isLoading={true}
          message="Đang tải trang..."
          duration={3000}
        />
      }
    >
      <LoadingWrapper>
        <LayoutContent>{children}</LayoutContent>
      </LoadingWrapper>
    </Suspense>
  );
};
