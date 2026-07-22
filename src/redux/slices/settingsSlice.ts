import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AppSettings } from '@/types/settings'
import type { ThemeMode } from '@/types'
import { STORAGE_KEYS } from '@/constants'
import { getStorageItem, setStorageItem } from '@/utils/storage'

const initialState: AppSettings = {
  themeMode: getStorageItem<ThemeMode>(STORAGE_KEYS.THEME_MODE, 'system'),
  sidebarCollapsed: getStorageItem<boolean>(STORAGE_KEYS.SIDEBAR_COLLAPSED, false),
  notificationsEnabled: true,
  emailReminders: true,
  language: 'en',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload
      setStorageItem(STORAGE_KEYS.THEME_MODE, action.payload)
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
      setStorageItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, state.sidebarCollapsed)
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload
      setStorageItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, action.payload)
    },
    updateSettings: (state, action: PayloadAction<Partial<AppSettings>>) => {
      Object.assign(state, action.payload)
    },
  },
})

export const { setThemeMode, toggleSidebar, setSidebarCollapsed, updateSettings } =
  settingsSlice.actions
export default settingsSlice.reducer

export const selectThemeMode = (state: { settings: AppSettings }) => state.settings.themeMode
export const selectSidebarCollapsed = (state: { settings: AppSettings }) =>
  state.settings.sidebarCollapsed
