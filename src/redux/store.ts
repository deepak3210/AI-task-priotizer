import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './api/baseApi'
import userReducer from './slices/userSlice'
import settingsReducer from './slices/settingsSlice'
import tasksReducer from './slices/tasksSlice'
import dashboardReducer from './slices/dashboardSlice'
import analyticsReducer from './slices/analyticsSlice'
import notificationsReducer from './slices/notificationsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
    tasks: tasksReducer,
    dashboard: dashboardReducer,
    analytics: analyticsReducer,
    notifications: notificationsReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(baseApi.middleware),
  devTools: import.meta.env.DEV,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
