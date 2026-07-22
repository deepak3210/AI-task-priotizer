import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from '@/redux/store'
import { AppThemeProvider } from '@/theme/ThemeProvider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'dark:!bg-slate-800 dark:!text-slate-100',
          }}
        />
      </AppThemeProvider>
    </Provider>
  )
}
