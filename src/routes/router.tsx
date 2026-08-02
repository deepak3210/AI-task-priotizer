import { createBrowserRouter, Navigate } from 'react-router'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { ROUTES } from '@/constants'
import {
  AIPage,
  AnalyticsPage,
  DashboardLayout,
  DashboardPage,
  LazyPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  RootLayout,
  SettingsPage,
  TasksPage,
} from './routeViews'

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
