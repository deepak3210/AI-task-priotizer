import { Navigate, useLocation } from 'react-router'
import { LoadingSpinner } from '@/components/common'
import { ROUTES } from '@/constants'
import { useAppSelector } from '@/redux/hooks'
import { selectAuthLoading, selectIsAuthenticated } from '@/redux/slices/userSlice'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const isLoading = useAppSelector(selectAuthLoading)
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner label="Checking authentication" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return children
}
