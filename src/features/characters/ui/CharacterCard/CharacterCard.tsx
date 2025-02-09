import { Button, Card, Tooltip } from 'antd'
import s from './CharacterCard.module.scss'
import { HeartTwoTone } from '@ant-design/icons'
import { useCharacter } from '@/features/characters/hooks/useCharacter'
import { Link } from 'react-router'

const { Meta } = Card

type Props = {
  id: number
  name: string
  image: string
  favorite: boolean
  isFavoritesPage?: boolean
}

export const CharacterCard = ({ id, name, image, favorite, isFavoritesPage }: Props) => {
  const { handleFavoriteClick } = useCharacter(id, name, favorite)

  const favoriteButton = isFavoritesPage ? (
    <Button danger size={'small'} onClick={handleFavoriteClick}>
      Удалить из избранного
    </Button>
  ) : (
    <Tooltip placement="right" title={favorite ? 'Удалить из избранного' : 'Добавить в избранное'}>
      <HeartTwoTone
        onClick={handleFavoriteClick}
        twoToneColor={favorite ? '#eb2f96' : '#ccc'}
        className={s.heartBtn}
      />
    </Tooltip>
  )

  return (
    <>
      <Link to={`/character/${id}`}>
        <Card hoverable className={s.card} cover={<img alt={image} src={image} />}>
          <Meta title={name} description={favoriteButton} />
        </Card>
      </Link>
    </>
  )
}
