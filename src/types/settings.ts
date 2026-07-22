import type { ThemeMode } from '@/types/user'

export interface AppSettings {
  themeMode: ThemeMode
  sidebarCollapsed: boolean
  notificationsEnabled: boolean
  emailReminders: boolean
  language: string
}
