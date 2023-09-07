import s from "./ProductCard.module.css";
import { Card, Carousel } from 'antd';

export default function ProductCard({item: {id, images, title, description}}) {
  return(
    <Card key={id} cover={<Carousel>
      {images.map((url) => {
        return(
      <div key={id}>
        <img className={s.img} key={id} src={url}/>
      </div>
        )
      })}
    </Carousel>}>
      <div className={s.card}>
    <span className={s.title}>{title}</span>
    <span className={s.desc}>{description}</span>
      </div>
    </Card>
  )
}
