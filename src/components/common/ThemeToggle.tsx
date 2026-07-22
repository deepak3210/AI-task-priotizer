import { memo, useCallback } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectThemeMode, setThemeMode } from '@/redux/slices/settingsSlice'
import { resolveThemeMode } from '@/utils'

function ThemeToggleComponent() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)
  const mode = resolveThemeMode(themeMode)
  const isDark = mode === 'dark'

  const toggleTheme = useCallback(() => {
    dispatch(setThemeMode(isDark ? 'light' : 'dark'))
  }, [dispatch, isDark])

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        size="small"
        className="!text-slate-600 dark:!text-slate-300"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </IconButton>
    </Tooltip>
  )
}

export const ThemeToggle = memo(ThemeToggleComponent)
