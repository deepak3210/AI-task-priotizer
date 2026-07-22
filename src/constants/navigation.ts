import {
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'
import { ROUTES } from './routes'

export interface NavItem {
  id: string
  label: string
  path: string
  icon: typeof HomeIcon
  badge?: number
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: HomeIcon,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    path: ROUTES.TASKS,
    icon: ClipboardDocumentListIcon,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: ROUTES.ANALYTICS,
    icon: ChartBarIcon,
  },
  {
    id: 'ai',
    label: 'AI Assistant',
    path: ROUTES.AI,
    icon: SparklesIcon,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: ROUTES.SETTINGS,
    icon: Cog6ToothIcon,
  },
]
