export const APP_NAME = 'AI Task Prioritizer'
export const APP_TAGLINE = 'Prioritize smarter. Work better.'

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'atp_auth_token',
  THEME_MODE: 'atp_theme_mode',
  SIDEBAR_COLLAPSED: 'atp_sidebar_collapsed',
} as const

export const API_DELAY_MS = {
  SHORT: 300,
  MEDIUM: 600,
  LONG: 1000,
} as const
