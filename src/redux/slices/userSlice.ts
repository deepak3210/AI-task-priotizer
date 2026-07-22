import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types'
import { STORAGE_KEYS } from '@/constants'
import { getStorageItem, removeStorageItem, setStorageItem } from '@/utils/storage'

interface UserState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

const mockUser: User = {
  id: 'user-1',
  email: 'alex.johnson@example.com',
  firstName: 'Alex',
  lastName: 'Johnson',
  avatar: undefined,
  role: 'admin',
  createdAt: '2025-01-15T08:00:00.000Z',
}

const storedToken = getStorageItem<string | null>(STORAGE_KEYS.AUTH_TOKEN, null)

const initialState: UserState = {
  user: storedToken ? mockUser : null,
  isAuthenticated: Boolean(storedToken),
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
      setStorageItem(STORAGE_KEYS.AUTH_TOKEN, 'mock-jwt-token')
    },
    loginFailure: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isLoading = false
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isLoading = false
      removeStorageItem(STORAGE_KEYS.AUTH_TOKEN)
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, setUser } = userSlice.actions
export default userSlice.reducer

export const selectUser = (state: { user: UserState }) => state.user.user
export const selectIsAuthenticated = (state: { user: UserState }) => state.user.isAuthenticated
export const selectAuthLoading = (state: { user: UserState }) => state.user.isLoading
