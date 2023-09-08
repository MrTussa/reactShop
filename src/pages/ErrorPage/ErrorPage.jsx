import s from './ErrorPage.module.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom'
export default function ErrorPage({ }) {
  return (
    <div className={s.container}>
      <Card
        className={s.card}
        cover={<img alt="404" src="404.png" />}
      >
        <div className={s.content}>
          <span className={s.text}>Страница Не Найдена</span>
          <Button type="primary" icon={<ArrowLeftOutlined />} size="large">
            <NavLink to="/">Назад на Главную</NavLink>
          </Button>
        </div>
      </Card>
    </div>
  )
}