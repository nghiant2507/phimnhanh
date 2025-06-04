import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/core/ui/dropdown-menu';
import {
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '~/core/ui/sidebar';

import { ItemMenu } from '..';

export function DropItems({ item }: { item: ItemMenu }) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
          >
            {item.icon && <item.icon size={20} />}
            <span className={'font-medium text-base'}>{item.title}</span>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={'max-h-100 min-w-64 rounded-lg'}
          align="start"
          side={isMobile ? 'bottom' : 'right'}
          sideOffset={4}
        >
          {item.children?.map((child, index) => (
            <DropdownMenuItem key={index}>
              {child.icon && <child.icon size={20} />}
              <Link
                href={child?.href ?? ''}
                className={'font-medium text-base'}
              >
                {child.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}
