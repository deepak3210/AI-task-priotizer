import { Navigate } from 'react-router'
import { ROUTES } from '@/constants'
import { useAppSelector } from '@/redux/hooks'
import { selectIsAuthenticated } from '@/redux/slices/userSlice'
import type { ReactNode } from 'react'

interface PublicRouteProps {
  children: ReactNode
}

export function PublicRoute({ children }: PublicRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return children
}
