export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'learning', label: 'Learning', href: '/learning' },
  { id: 'connect', label: 'Explore', href: '/connect' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'media', label: 'Media', href: '/media' },
  { id: 'impact', label: 'Impact', href: '/impact' },
  { id: 'about', label: 'About', href: '/about' },
];
