import {
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  LineChartIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';

export const linkItems = [
  { label: 'Employees', icon: UsersIcon, value: '/management/employees' },
  { label: 'Attendances', icon: ClockIcon, value: '/management/attendances' },
  { label: 'Analytics', icon: LineChartIcon, value: '/analytics' },
  { label: 'Schedule', icon: CalendarIcon, value: '/schedule' },
  { label: 'Reports', icon: FileTextIcon, value: '/management/reports' },
  { label: 'Settings', icon: SettingsIcon, value: '/settings' },
];
