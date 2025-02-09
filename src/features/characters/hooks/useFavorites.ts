import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchFavoriteCharacters } from '@/features/characters/model/charctersSlice'
import { useSelector } from 'react-redux'
import {
  selectFavoriteCharacters,
  selectLoading,
} from '@/features/characters/model/charactersSelectors'
import { useNavigate } from 'react-router'

export const useFavorites = () => {
  const dispatch = useAppDispatch()
  const favoriteCharacters = useSelector(selectFavoriteCharacters)
  const loading = useSelector(selectLoading)
  const navigate = useNavigate()

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '[]')
    if (storedFavorites.length > 0) {
      dispatch(fetchFavoriteCharacters(storedFavorites))
    }
  }, [dispatch])

  return {
    favoriteCharacters,
    loading,
    navigate,
  }
}
