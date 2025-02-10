import { rickAndMortyApi } from '@/common/api/commonApi'
import { Character, RickAndMortyApiResponse } from '@/features/characters/api/charactersApi.types'
import { fetchCharactersParams } from '@/features/characters/model/charctersSlice'

export const charactersApi = {
  getCharacters(params: fetchCharactersParams) {
    return rickAndMortyApi.get<RickAndMortyApiResponse>('character', { params })
  },
  getMultipleCharacters(ids: number[]) {
    return rickAndMortyApi.get<Character[] | Character>(`character/${ids}`)
  },
  getCharacterById(id: number) {
    return rickAndMortyApi.get<Character>(`character/${id}`)
  },
}
