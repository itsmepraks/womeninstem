export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'pathfinder', label: 'Pathfinder', href: '/pathfinder' },
  { id: 'resources', label: 'Resources', href: '/resources' },
  { id: 'learning', label: 'Learning', href: '/learning' },
  { id: 'impact', label: 'Impact', href: '/impact' },
  { id: 'about', label: 'About', href: '/about' },
];
