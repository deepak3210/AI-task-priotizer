export const palette = {
  light: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    success: { main: '#10B981' },
    warning: { main: '#F59E0B' },
    error: { main: '#EF4444' },
    info: { main: '#3B82F6' },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
    glass: 'rgba(255, 255, 255, 0.72)',
    glassBorder: 'rgba(255, 255, 255, 0.4)',
    sidebar: '#FFFFFF',
    navbar: 'rgba(255, 255, 255, 0.85)',
  },
  dark: {
    primary: {
      main: '#818CF8',
      light: '#A5B4FC',
      dark: '#6366F1',
      contrastText: '#0F172A',
    },
    secondary: {
      main: '#A78BFA',
      light: '#C4B5FD',
      dark: '#8B5CF6',
      contrastText: '#0F172A',
    },
    success: { main: '#34D399' },
    warning: { main: '#FBBF24' },
    error: { main: '#F87171' },
    info: { main: '#60A5FA' },
    background: {
      default: '#0B1120',
      paper: '#111827',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(241, 245, 249, 0.08)',
    glass: 'rgba(17, 24, 39, 0.72)',
    glassBorder: 'rgba(255, 255, 255, 0.08)',
    sidebar: '#111827',
    navbar: 'rgba(17, 24, 39, 0.85)',
  },
} as const

export type AppPalette = typeof palette.light
