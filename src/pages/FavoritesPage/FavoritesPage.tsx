import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import s from './FavoritesPage.module.scss'
import { Favorites } from '@/features/characters/ui/Favorites/Favorites'

const { Title } = Typography

export const FavoritesPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button type="link" size={'large'} icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Title level={1} className={s.favoritesTitle}>
        Избранные персонажи
      </Title>
      <Favorites />
    </div>
  )
}
