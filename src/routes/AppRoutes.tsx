import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import { DashboardLayout } from '@/layouts'
import { AppProviders } from '@/providers'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { ROUTES } from '@/constants'

function RootLayout() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  )
}

const DashboardPage = lazy(() => import('@/pages/Dashboard'))
const TasksPage = lazy(() => import('@/pages/Tasks'))
const AnalyticsPage = lazy(() => import('@/pages/Analytics'))
const AIPage = lazy(() => import('@/pages/AI'))
const SettingsPage = lazy(() => import('@/pages/Settings'))
const LoginPage = lazy(() => import('@/pages/Login'))
const RegisterPage = lazy(() => import('@/pages/Register'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

function LazyPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingSpinner className="min-h-[50vh]" />}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
  {
    path: ROUTES.LOGIN,
    element: (
      <PublicRoute>
        <LazyPage>
          <LoginPage />
        </LazyPage>
      </PublicRoute>
    ),
  },
  {
    path: ROUTES.REGISTER,
    element: (
      <PublicRoute>
        <LazyPage>
          <RegisterPage />
        </LazyPage>
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyPage>
            <DashboardPage />
          </LazyPage>
        ),
      },
      {
        path: 'tasks',
        element: (
          <LazyPage>
            <TasksPage />
          </LazyPage>
        ),
      },
      {
        path: 'analytics',
        element: (
          <LazyPage>
            <AnalyticsPage />
          </LazyPage>
        ),
      },
      {
        path: 'ai',
        element: (
          <LazyPage>
            <AIPage />
          </LazyPage>
        ),
      },
      {
        path: 'settings',
        element: (
          <LazyPage>
            <SettingsPage />
          </LazyPage>
        ),
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: (
      <LazyPage>
        <NotFoundPage />
      </LazyPage>
    ),
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.NOT_FOUND} replace />,
  },
    ],
  },
])
