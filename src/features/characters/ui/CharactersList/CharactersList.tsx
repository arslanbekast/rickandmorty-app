import { CharacterDomain } from '@/features/characters/model/charctersSlice'
import { CharacterCard } from '@/features/characters/ui/CharacterCard/CharacterCard'
import { Flex } from 'antd'

type Props = {
  characters: CharacterDomain[]
  isFavoritesPage?: boolean
}

export const CharactersList = ({ characters, isFavoritesPage }: Props) => {
  return (
    <Flex gap={12} align={'stretch'} justify="center" wrap="wrap">
      {characters.map(char => (
        <CharacterCard
          key={char.id}
          id={char.id}
          name={char.name}
          image={char.image}
          favorite={char.favorite}
          isFavoritesPage={isFavoritesPage}
        />
      ))}
    </Flex>
  )
}
