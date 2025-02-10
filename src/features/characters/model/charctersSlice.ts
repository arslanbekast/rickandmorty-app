import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/common/utils/createAppAsyncThunk'
import { charactersApi } from '@/features/characters/api/charactersApi'
import {
  Character,
  Info,
  RickAndMortyApiResponse,
} from '@/features/characters/api/charactersApi.types'
import { setAppError } from '@/app/appSlice'
import { handleServerNetworkError } from '@/common/utils/handleServerNetworkError'

export const fetchCharacters = createAppAsyncThunk<
  RickAndMortyApiResponse,
  fetchCharactersParams | undefined
>(
  'characters/fetchCharacters',
  async (params = { page: 1, name: '' }, { dispatch, rejectWithValue }) => {
    try {
      const response = await charactersApi.getCharacters(params)
      if (response.status === 200) {
        return response.data
      } else {
        dispatch(setAppError(response.statusText))
        return rejectWithValue(null)
      }
    } catch (error: unknown) {
      handleServerNetworkError(error, dispatch)
      return rejectWithValue(null)
    }
  }
)

export const fetchFavoriteCharacters = createAppAsyncThunk<Character[] | Character, number[]>(
  'characters/fetchFavoriteCharacters',
  async (ids, { dispatch, rejectWithValue }) => {
    try {
      if (!ids.length) return []
      const response = await charactersApi.getMultipleCharacters(ids)
      if (response.status === 200) {
        return response.data
      } else {
        dispatch(setAppError(response.statusText))
        return rejectWithValue(null)
      }
    } catch (error: unknown) {
      handleServerNetworkError(error, dispatch)
      return rejectWithValue(null)
    }
  }
)

export const fetchCharacterById = createAppAsyncThunk<Character, number>(
  'characters/fetchCharacterById',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await charactersApi.getCharacterById(id)
      if (response.status === 200) {
        return response.data
      } else {
        dispatch(setAppError(response.statusText))
        return rejectWithValue(null)
      }
    } catch (error) {
      handleServerNetworkError(error, dispatch)
      return rejectWithValue(null)
    }
  }
)

const initialState: CharactersState = {
  characters: [],
  favoriteCharacters: [],
  selectedCharacter: null,
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  currentPage: 1,
  searchName: '',
  loading: false,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacterFavorite: (state, action: PayloadAction<{ id: number; favorite: boolean }>) => {
      const character = state.characters.find(character => character.id === action.payload.id)
      if (character) {
        character.favorite = action.payload.favorite
      }
    },
    removeCharacterFromFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        character => character.id !== action.payload
      )
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setSearchName: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<RickAndMortyApiResponse>) => {
          state.characters = action.payload.results.map(character => ({
            ...character,
            favorite: false,
          }))
          state.info = action.payload.info
        }
      )
      .addCase(
        fetchFavoriteCharacters.fulfilled,
        (state, action: PayloadAction<Character[] | Character>) => {
          if (Array.isArray(action.payload)) {
            state.favoriteCharacters = action.payload.map(character => ({
              ...character,
              favorite: true,
            }))
          } else {
            state.favoriteCharacters = [{ ...action.payload, favorite: true }]
          }
        }
      )
      .addCase(fetchCharacterById.fulfilled, (state, action: PayloadAction<Character>) => {
        state.selectedCharacter = { ...action.payload, favorite: false }
      })
      .addMatcher(isPending, state => {
        state.loading = true
      })
      .addMatcher(isRejected, state => {
        state.loading = false
      })
      .addMatcher(isFulfilled, state => {
        state.loading = false
      })
  },
})

export const charactersReducer = charactersSlice.reducer
export const { setCharacterFavorite, removeCharacterFromFavorites, setCurrentPage, setSearchName } =
  charactersSlice.actions

// types
export type CharacterDomain = Character & {
  favorite: boolean
}
export type CharactersState = {
  characters: CharacterDomain[]
  favoriteCharacters: CharacterDomain[]
  selectedCharacter: CharacterDomain | null
  info: Info
  currentPage: number
  searchName: string
  loading: boolean
}
export type fetchCharactersParams = {
  page?: number
  name?: string
}
