import { createContext, useContext } from 'react'
import type { ThemeMode } from '@/types'

export interface ThemeContextValue {
  mode: 'light' | 'dark'
  themeMode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useAppTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider')
  }
  return context
}
