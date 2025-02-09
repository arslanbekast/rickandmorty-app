import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import {
  selectCharacterById,
  selectLoading,
  selectSelectedCharacter,
} from '@/features/characters/model/charactersSelectors'
import { useEffect } from 'react'
import { Button, Typography } from 'antd'
import { CharacterDetail } from '@/features/characters/ui/CharacterDetail/CharacterDetail'
import { ArrowLeftOutlined } from '@ant-design/icons'
import s from './CharacterDetailPage.module.scss'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { fetchCharacterById } from '@/features/characters/model/charctersSlice'
import { CircularProgress } from '@/common/components/CircularProgress/CircularProgress'

const { Title } = Typography

type RouteParams = {
  id: string
}
export const CharacterDetailPage = () => {
  const { id } = useParams<RouteParams>()
  const loading = useSelector(selectLoading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const characterFromState = useSelector((state: RootState) =>
    selectCharacterById(state, Number(id))
  )
  const selectedCharacter = useSelector(selectSelectedCharacter)

  useEffect(() => {
    if (!characterFromState) {
      dispatch(fetchCharacterById(Number(id)))
    }
  }, [id, characterFromState, dispatch])

  const character = characterFromState || selectedCharacter

  if (loading) return <CircularProgress />

  return (
    <div>
      <Button type="link" size={'large'} icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Title level={2} className={s.title}>
        {character?.name}
      </Title>
      {character && <CharacterDetail character={character} />}
    </div>
  )
}
