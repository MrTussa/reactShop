import s from "./ProductCard.module.css";
import { Card, Carousel, Rate } from 'antd';

export default function ProductCard({ item: { id, images, title, description, price, rating, discountPercentage }, isPreview = false }) {
  return (
    <Card key={id} cover={<Carousel>
      {images.map((url) => {
        return (
          <div key={id}>
            <img className={s.img} key={id} src={url} />
          </div>
        )
      })}
    </Carousel>}>
      <div className={s.card}>
        <span className={s.title}>{title}</span>
        <span className={s.desc}>{description}</span>
        <div className={s.details}>
          <span className={s.price}>${price}</span>
          {
            discountPercentage ?
              (
                <div>
                  <span className={s.rating}> <Rate allowHalf disabled defaultValue={rating} /></span>
                  <hr className={s.hr} />
                  <span className={s.discount}>Discount {Math.round(discountPercentage)}%</span>
                </div>
              ) :
              <span className={s.rating}> <Rate allowHalf disabled defaultValue={rating} /></span>
          }
        </div>
        {
          !isPreview && 
          <div></div>
        }
      </div>
    </Card>
  )
}
