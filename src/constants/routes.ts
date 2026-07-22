export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/',
  TASKS: '/tasks',
  ANALYTICS: '/analytics',
  AI: '/ai',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register',
  NOT_FOUND: '*',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
