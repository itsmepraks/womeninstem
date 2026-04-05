export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'learning', label: 'Learning', href: '/learning' },
  { id: 'pioneers', label: 'Pioneers', href: '/pioneers' },
  { id: 'impact', label: 'Impact', href: '/impact' },
  { id: 'about', label: 'About', href: '/about' },
];
