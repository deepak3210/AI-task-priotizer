import { createSlice } from '@reduxjs/toolkit'

interface DashboardState {
  isLoading: boolean
  error: string | null
}

const initialState: DashboardState = {
  isLoading: false,
  error: null,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
})

export default dashboardSlice.reducer
