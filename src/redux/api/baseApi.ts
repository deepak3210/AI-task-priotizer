import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * Base RTK Query API — endpoints will be injected in later phases.
 * Replace baseUrl with your Express API when backend is ready.
 */
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('atp_auth_token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Task', 'Dashboard', 'Analytics', 'Notification', 'User', 'Settings', 'AI'],
  endpoints: () => ({}),
})
