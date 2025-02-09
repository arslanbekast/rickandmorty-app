import s from './ErrorPage.module.scss'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router'

export const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className={s.errorPage}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="default" onClick={() => navigate('/')}>
            Перейти на главную
          </Button>
        }
      />
    </div>
  )
}
