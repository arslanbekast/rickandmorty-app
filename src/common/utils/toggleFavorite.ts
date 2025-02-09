import { AppDispatch } from '@/app/store'
import { getFavorites, saveFavorites } from '@/common/utils/favoritesUtils'
import {
  removeCharacterFromFavorites,
  setCharacterFavorite,
} from '@/features/characters/model/charctersSlice'

export const toggleFavorite = (characterId: number, dispatch: AppDispatch): void => {
  const favorites = getFavorites()
  let updatedFavorites

  if (favorites.includes(characterId)) {
    updatedFavorites = favorites.filter(favId => favId !== characterId) // Удаляем из избранного
    dispatch(removeCharacterFromFavorites(characterId))
  } else {
    updatedFavorites = [...favorites, characterId] // Добавляем в избранное
  }
  saveFavorites(updatedFavorites)
  dispatch(
    setCharacterFavorite({ id: characterId, favorite: updatedFavorites.includes(characterId) })
  )
}
