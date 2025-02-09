import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { ChangeEvent, useEffect } from 'react'
import {
  fetchCharacters,
  setCurrentPage,
  setSearchName,
} from '@/features/characters/model/charctersSlice'
import { useSelector } from 'react-redux'
import { selectLoading, selectSearchName } from '@/features/characters/model/charactersSelectors'
import { useDebounce } from '@/common/hooks/useDebounce'

export const useSearch = () => {
  const searchName = useSelector(selectSearchName)
  const debouncedValue = useDebounce(searchName, 500)
  const loading = useSelector(selectLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1, name: debouncedValue }))
    dispatch(setCurrentPage(1))
  }, [debouncedValue, dispatch])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(e.target.value))
  }

  return {
    searchName,
    loading,
    onChange,
  }
}
