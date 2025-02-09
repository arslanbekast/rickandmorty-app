import { Flex, Pagination } from 'antd'
import { SearchPanel } from '@/features/characters/ui/SearchPanel/SearchPanel'
import { CharactersList } from '@/features/characters/ui/CharactersList/CharactersList'
import { useCharacters } from '@/features/characters/hooks/useCharacters'
import { CircularProgress } from '@/common/components/CircularProgress/CircularProgress'

export const Characters = () => {
  const { characters, info, currentPage, loading, handlePageChange } = useCharacters()

  return (
    <Flex gap={25} align={'center'} vertical justify={'center'}>
      <SearchPanel />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <CharactersList characters={characters} />
          <Pagination
            align="center"
            defaultCurrent={1}
            current={currentPage}
            total={info.count}
            pageSize={20}
            showSizeChanger={false}
            hideOnSinglePage={true}
            onChange={handlePageChange}
          />
        </>
      )}
    </Flex>
  )
}
