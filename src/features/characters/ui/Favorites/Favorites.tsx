import { CharactersList } from '@/features/characters/ui/CharactersList/CharactersList'
import { Button, Flex, Typography } from 'antd'
import { CircularProgress } from '@/common/components/CircularProgress/CircularProgress'
import s from './Favorites.module.scss'
import { useFavorites } from '@/features/characters/hooks/useFavorites'

const { Text } = Typography

export const Favorites = () => {
  const { favoriteCharacters, loading, navigate } = useFavorites()

  if (loading) return <CircularProgress />

  return (
    <>
      {favoriteCharacters.length === 0 && (
        <Flex vertical align={'center'} gap={22}>
          <Text className={s.text}>
            Список избранных пуст. Добавьте персонажей с главной страницы!
          </Text>
          <Button onClick={() => navigate('/')}>Перейти на главную</Button>
        </Flex>
      )}
      <CharactersList characters={favoriteCharacters} isFavoritesPage={true} />
    </>
  )
}
