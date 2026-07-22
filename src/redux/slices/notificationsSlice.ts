import { createSlice } from '@reduxjs/toolkit'

interface NotificationsState {
  unreadCount: number
  isLoading: boolean
}

const initialState: NotificationsState = {
  unreadCount: 3,
  isLoading: false,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
})

export default notificationsSlice.reducer

export const selectUnreadCount = (state: { notifications: NotificationsState }) =>
  state.notifications.unreadCount
