import { createSlice } from '@reduxjs/toolkit'

interface TasksState {
  isLoading: boolean
  error: string | null
}

const initialState: TasksState = {
  isLoading: false,
  error: null,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
})

export default tasksSlice.reducer
