import { createSlice } from '@reduxjs/toolkit'

interface AnalyticsState {
  isLoading: boolean
  error: string | null
}

const initialState: AnalyticsState = {
  isLoading: false,
  error: null,
}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {},
})

export default analyticsSlice.reducer
