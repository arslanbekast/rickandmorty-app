import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { MouseEvent, useEffect } from 'react'
import { getFavorites } from '@/common/utils/favoritesUtils'
import { setCharacterFavorite } from '@/features/characters/model/charctersSlice'
import { toggleFavorite } from '@/common/utils/toggleFavorite'
import { toast } from 'react-toastify'

export const useCharacter = (id: number, name: string, favorite: boolean) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const favorites = getFavorites()
    if (favorites.includes(id) && !favorite) {
      dispatch(setCharacterFavorite({ id, favorite: favorites.includes(id) }))
    }
  }, [dispatch, id, favorite])

  const handleFavoriteClick = (event: MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()

    toggleFavorite(id, dispatch)
    toast.success(favorite ? `${name} удален из избранного` : `${name} добавлен в избранное`)
  }

  return {
    handleFavoriteClick,
  }
}
