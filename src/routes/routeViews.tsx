import { lazy, Suspense, type ReactNode } from 'react'
import { Outlet } from 'react-router'
import { AppProviders } from '@/providers'
import { DashboardLayout } from '@/layouts'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

export function RootLayout() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  )
}

export function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<LoadingSpinner className="min-h-[50vh]" />}>{children}</Suspense>
}

export const DashboardPage = lazy(() => import('@/pages/Dashboard'))
export const TasksPage = lazy(() => import('@/pages/Tasks'))
export const AnalyticsPage = lazy(() => import('@/pages/Analytics'))
export const AIPage = lazy(() => import('@/pages/AI'))
export const SettingsPage = lazy(() => import('@/pages/Settings'))
export const LoginPage = lazy(() => import('@/pages/Login'))
export const RegisterPage = lazy(() => import('@/pages/Register'))
export const NotFoundPage = lazy(() => import('@/pages/NotFound'))

export { DashboardLayout }
