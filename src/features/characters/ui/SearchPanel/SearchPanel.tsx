import { Input } from 'antd'
import s from './SearchPanel.module.scss'
import { useSearch } from '@/features/characters/hooks/useSearch'

export const SearchPanel = () => {
  const { searchName, loading, onChange } = useSearch()

  return (
    <Input.Search
      placeholder="Начинайте вводить имя персонажа"
      value={searchName}
      onChange={onChange}
      loading={loading}
      className={s.searchPanel}
    />
  )
}
