import { Button, Typography } from 'antd'
import { Characters } from '@/features/characters/ui/Characters'
import { Link } from 'react-router'
import s from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div>
      <Link to={'/favorites/'} className={s.favoriteLink}>
        <Button type="dashed" size={'large'}>
          Избранные
        </Button>
      </Link>
      <Typography.Title level={1} style={{ textAlign: 'center' }}>
        Rick And Morty
      </Typography.Title>
      <Characters />
    </div>
  )
}
