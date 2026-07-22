export type ThemeMode = 'light' | 'dark' | 'system'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: 'admin' | 'member' | 'viewer'
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
