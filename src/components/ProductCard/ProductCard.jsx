import s from "./ProductCard.module.css";
import { Card, Carousel, Rate, Button } from "antd";

export default function ProductCard({
  item: { id, images, title, description, price, rating, discountPercentage },
  isPreview = false, addCart
}) {
  return (
    <Card
      key={id}
      bodyStyle={{ padding: "0" }}
      cover={
        <Carousel>
          {images.map((url) => {
            return (
              <div key={id}>
                <img className={s.img} key={id} alt={title} src={url} />
              </div>
            );
          })}
        </Carousel>
      }
    >
        <div className={s.content}>
      <div className={s.card}>
          <span className={s.title}>{title}</span>
          <span className={s.desc}>{description}</span>
          <div className={s.details}>
            <span className={s.price}>${price}</span>
            {discountPercentage ? (
              <div>
                <span className={s.rating}>
                  <Rate allowHalf disabled defaultValue={rating} />
                </span>
                <hr className={s.hr} />
                <span className={s.discount}>
                  Discount {Math.round(discountPercentage)}%
                </span>
              </div>
            ) : (
              <span className={s.rating}>
                <Rate allowHalf disabled defaultValue={rating} />
              </span>
            )}
          </div>
        </div>
        {!isPreview && (
          <div className={s.buttonContainer}>
            <Button className={s.button}>Подробнее</Button>
            <div className={s.decoration}>|</div>
            <Button className={s.button} onClick={() => addCart(title)}>В корзину</Button>
          </div>
        )}
      </div>
    </Card>
  );
}
