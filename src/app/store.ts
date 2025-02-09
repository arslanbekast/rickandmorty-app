import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '@/app/appSlice'
import { charactersReducer } from '@/features/characters/model/charctersSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    characters: charactersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
