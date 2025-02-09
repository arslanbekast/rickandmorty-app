import { CharacterDomain } from '@/features/characters/model/charctersSlice'
import { Button, Card, Flex, Image, Typography } from 'antd'
import s from './CharacterDetail.module.scss'
import { useCharacter } from '@/features/characters/hooks/useCharacter'

type Props = {
  character: CharacterDomain
}
const { Text } = Typography
export const CharacterDetail = ({ character }: Props) => {
  const { id, name, status, species, gender, origin, location, favorite } = character
  const characterDetailData = [
    { title: 'Name: ', value: name },
    { title: 'Status: ', value: status },
    { title: 'Species: ', value: species },
    { title: 'Gender: ', value: gender },
    { title: 'Origin: ', value: origin.name },
    { title: 'Location: ', value: location.name },
  ]

  const { handleFavoriteClick } = useCharacter(id, name, favorite)

  return (
    <Card>
      <Flex align={'center'} justify={'center'} gap={26} wrap={'wrap'}>
        <div className={s.imageWrapper}>
          <Image src={character.image} />
        </div>
        <div>
          {characterDetailData.map((detail, index) => (
            <div key={index}>
              <Text strong className={s.detailTitle}>
                {detail.title}
              </Text>
              <Text className={s.detailValue}>{detail.value}</Text>
            </div>
          ))}
          <Button
            type={favorite ? 'primary' : 'default'}
            onClick={handleFavoriteClick}
            className={s.detailButton}
          >
            {favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </Button>
        </div>
      </Flex>
    </Card>
  )
}
