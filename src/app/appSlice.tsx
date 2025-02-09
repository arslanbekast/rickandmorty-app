import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false as boolean,
    error: null as string | null,
  },
  reducers: {
    setAppInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload
    },
    setAppError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const appReducer = appSlice.reducer
export const { setAppInitialized, setAppError } = appSlice.actions
