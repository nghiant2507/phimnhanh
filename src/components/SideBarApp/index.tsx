'use client';

import {
  Baby,
  Film,
  Globe,
  Home,
  List,
  LucideIcon,
  MessageSquare,
  MonitorPlay,
  Subtitles,
  Tv,
  Users,
  VideoIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Separator } from '~/core/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/core/ui/sidebar';
import { getCategories, getCountries } from '~/services';
import { CategoryEntity } from '~/types';

import { DropItems } from './DropItems';

export interface ItemMenu {
  title: string;
  icon?: LucideIcon;
  href?: string;
  children?: ItemMenu[];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [data, setData] = useState<CategoryEntity[]>([]);
  const [dataCountry, setDataCountry] = useState<CategoryEntity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, countriesRes] = await Promise.all([
          getCategories(),
          getCountries(),
        ]);

        setData(categoriesRes);
        setDataCountry(countriesRes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const isActiveUrl = useMemo(() => {
    return (url: string) => {
      return pathname === url || pathname.startsWith(`${url}/`);
    };
  }, [pathname]);

  const itemsCategories = useMemo(() => {
    return data.map((item) => ({
      title: item.name,
      icon: Film,
      href: `/the-loai/${item.slug}`,
    }));
  }, [data]);

  const itemsCountries = useMemo(() => {
    return dataCountry.map((item) => ({
      title: item.name,
      icon: Globe,
      href: `/quoc-gia/${item.slug}`,
    }));
  }, [dataCountry]);

  const itemsMenu = useMemo(() => {
    return [
      {
        title: 'Trang chủ',
        icon: Home,
        href: '/',
      },
      {
        title: 'Phim lẻ',
        icon: VideoIcon,
        href: '/phim-le',
      },
      {
        title: 'Phim bộ',
        icon: MonitorPlay,
        href: '/phim-bo',
      },
      {
        title: 'Phim VietSub',
        icon: Subtitles,
        href: '/phim-vietsub',
      },
      {
        title: 'Phim Thuyết Minh',
        icon: MessageSquare,
        href: '/phim-thuyet-minh',
      },
      {
        title: 'SubTeam',
        icon: Users,
        href: '/subteam',
      },
      {
        title: 'Hoạt hình',
        icon: Baby,
        href: '/hoat-hinh',
      },
      {
        title: 'TV Show',
        icon: Tv,
        href: '/tv-show',
      },
      {
        title: 'Thể loại',
        icon: List,
        children: itemsCategories,
      },
      {
        title: 'Quốc gia',
        icon: Globe,
        children: itemsCountries,
      },
    ] as ItemMenu[];
  }, [itemsCountries, itemsCategories]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          href={'/'}
          className={
            'flex items-center gap-2 text-3xl font-bold text-primary transition-colors justify-center'
          }
        >
          <Image src={'/logo.svg'} alt="logo" width={42} height={42} />
          PhimNhanh
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup className="flex-1 justify-between">
          <SidebarMenu className={'space-y-1 flex-1'}>
            {itemsMenu.map((item, index) => {
              if (item?.children) {
                return null;
              }
              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActiveUrl(item.href ?? '')}
                    className={
                      'text-white/90 hover:text-white hover:bg-primary/10'
                    }
                  >
                    <Link
                      href={item.href ?? ''}
                      className={'flex items-center gap-3 py-3 pl-6'}
                    >
                      {item.icon && <item.icon size={20} />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            {itemsMenu.map((item, index) => {
              if (item?.children) {
                return <DropItems key={index} item={item} />;
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={'border-t border-border py-3'}>
        <div className={'flex items-center gap-2 text-sm justify-center'}>
          <span>© 2025 PhimNhanh</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
