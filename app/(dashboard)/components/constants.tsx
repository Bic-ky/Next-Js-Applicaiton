import { Home, Calendar, Users, FileText, Activity, Settings } from 'lucide-react';

export const sidebarItems = [
  { href: '/dashboard', id: 'dashboard', label: 'Dashboard', icon: Home },
  { href: '/appointments', id: 'appointments', label: 'Appointments', icon: Calendar },
  { href: '/patients', id: 'patients', label: 'Patients', icon: Users },
  { href: '/analytics', id: 'analytics', label: 'Analytics', icon: Activity },
  { href: '/settings', id: 'settings', label: 'Settings', icon: Settings },
] as const;
