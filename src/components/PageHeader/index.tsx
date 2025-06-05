'use client';

import { Bell, Home, User } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/core/ui/breadcrumb';
import { Button } from '~/core/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/core/ui/dropdown-menu';
import { Separator } from '~/core/ui/separator';
import { SidebarTrigger } from '~/core/ui/sidebar';

export const PageHeader = ({ title }: { title?: string }) => {
  const [updateItems, setUpdateItems] = useState<number>();

  useEffect(() => {
    const items = localStorage.getItem('updateToday');
    if (items) {
      setUpdateItems(JSON.parse(items));
    }
  }, []);
  return (
    <header
      className={
        'sticky top-0 z-50 backdrop-blur-lg bg-background/60 h-15 border-b border-border flex items-center justify-between px-4'
      }
    >
      <div className={'flex items-center gap-2'}>
        <SidebarTrigger className={'cursor-pointer'} />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className={'text-white flex items-center gap-2'}>
                  <Home size={18} />
                  Trang chủ
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {title && (
              <Fragment>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </Fragment>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className={'flex items-center gap-2'}>
        {' '}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              className={'relative cursor-pointer'}
            >
              <Bell size={18} />
              {updateItems !== 0 && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 text-[8px] text-white flex items-center justify-center">
                  {updateItems}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className={'p-2'}>
              <h3 className={'font-semibold'}>Thông báo</h3>
              <Separator className={'my-2'} />
              {updateItems !== 0 ? (
                <div className="space-y-2 text-sm">
                  Có {updateItems} phim vừa được cập nhật
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Không có phim mới cập nhật
                </p>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>{' '}
        <Button size={'icon'}>
          <User size={18} />
        </Button>
      </div>
    </header>
  );
};
