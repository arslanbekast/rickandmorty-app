import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { fetchCharacters, setCurrentPage } from '@/features/characters/model/charctersSlice'
import { useSelector } from 'react-redux'
import {
  selectCharacters,
  selectCurrentPage,
  selectInfo,
  selectLoading,
  selectSearchName,
} from '@/features/characters/model/charactersSelectors'

export const useCharacters = () => {
  const characters = useSelector(selectCharacters)
  const info = useSelector(selectInfo)
  const searchName = useSelector(selectSearchName)
  const currentPage = useSelector(selectCurrentPage)
  const loading = useSelector(selectLoading)

  const dispatch = useAppDispatch()

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
    dispatch(fetchCharacters({ page, name: searchName }))
  }

  return {
    characters,
    info,
    currentPage,
    loading,
    handlePageChange,
  }
}
