'use client';

import { Home, User } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/core/ui/breadcrumb';
import { Button } from '~/core/ui/button';
import { Separator } from '~/core/ui/separator';
import { SidebarTrigger } from '~/core/ui/sidebar';

export const PageHeader = ({ title }: { title?: string }) => {
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
        <Button size={'icon'}>
          <User size={18} />
        </Button>
      </div>
    </header>
  );
};
