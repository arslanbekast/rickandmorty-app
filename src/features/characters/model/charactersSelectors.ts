import { RootState } from '@/app/store'

export const selectCharacters = (state: RootState) => state.characters.characters
export const selectFavoriteCharacters = (state: RootState) => state.characters.favoriteCharacters
export const selectSelectedCharacter = (state: RootState) => state.characters.selectedCharacter
export const selectSearchName = (state: RootState) => state.characters.searchName
export const selectCurrentPage = (state: RootState) => state.characters.currentPage
export const selectLoading = (state: RootState) => state.characters.loading
export const selectInfo = (state: RootState) => state.characters.info
export const selectCharacterById = (state: RootState, id: number) =>
  state.characters.characters.find(character => character.id === id) ||
  state.characters.favoriteCharacters.find(character => character.id === id) ||
  null
