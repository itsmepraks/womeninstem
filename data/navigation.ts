export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'learning', label: 'Learning', href: '/learning' },
  { id: 'connect', label: 'Connect', href: '/connect' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'about', label: 'About', href: '/about' },
];
