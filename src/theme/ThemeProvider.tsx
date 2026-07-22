import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectThemeMode } from '@/redux/slices/settingsSlice'
import { setThemeMode } from '@/redux/slices/settingsSlice'
import { createAppTheme } from './muiTheme'
import { resolveThemeMode } from '@/utils'
import type { ThemeMode } from '@/types'

interface ThemeContextValue {
  mode: 'light' | 'dark'
  themeMode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface AppThemeProviderProps {
  children: ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>(() =>
    resolveThemeMode(themeMode),
  )

  useEffect(() => {
    const resolved = resolveThemeMode(themeMode)
    setResolvedMode(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.classList.toggle('dark', resolved === 'dark')
  }, [themeMode])

  useEffect(() => {
    if (themeMode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const resolved = resolveThemeMode('system')
      setResolvedMode(resolved)
      document.documentElement.setAttribute('data-theme', resolved)
      document.documentElement.classList.toggle('dark', resolved === 'dark')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [themeMode])

  const theme = useMemo(() => createAppTheme(resolvedMode), [resolvedMode])

  const toggleTheme = useCallback(() => {
    const nextMode = resolvedMode === 'light' ? 'dark' : 'light'
    dispatch(setThemeMode(nextMode))
  }, [dispatch, resolvedMode])

  const setTheme = useCallback(
    (mode: ThemeMode) => {
      dispatch(setThemeMode(mode))
    },
    [dispatch],
  )

  const value = useMemo(
    () => ({
      mode: resolvedMode,
      themeMode,
      toggleTheme,
      setTheme,
    }),
    [resolvedMode, themeMode, toggleTheme, setTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useAppTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider')
  }
  return context
}
