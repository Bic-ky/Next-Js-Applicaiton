import { Home, Calendar, Users, FileText, Activity, Settings } from 'lucide-react';

export const sidebarItems = [
  { href: '/dashboard', id: 'dashboard', label: 'Dashboard', icon: Home },
  { href: '/settings', id: 'settings', label: 'Settings', icon: Settings },
] as const;
