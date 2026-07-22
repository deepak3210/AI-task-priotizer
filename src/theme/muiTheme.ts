import { createTheme, type Theme } from '@mui/material/styles'
import { palette } from './palette'

declare module '@mui/material/styles' {
  interface Palette {
    glass: string
    glassBorder: string
    sidebar: string
    navbar: string
  }
  interface PaletteOptions {
    glass?: string
    glassBorder?: string
    sidebar?: string
    navbar?: string
  }
}

export function createAppTheme(mode: 'light' | 'dark'): Theme {
  const colors = palette[mode]

  return createTheme({
    palette: {
      mode,
      primary: colors.primary,
      secondary: colors.secondary,
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
      info: colors.info,
      background: colors.background,
      text: colors.text,
      divider: colors.divider,
      glass: colors.glass,
      glassBorder: colors.glassBorder,
      sidebar: colors.sidebar,
      navbar: colors.navbar,
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
}
