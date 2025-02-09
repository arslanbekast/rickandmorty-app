import { RootState } from '@/app/store'

export const selectAppInitialized = (state: RootState) => state.app.isInitialized
export const selectAppError = (state: RootState) => state.app.error
