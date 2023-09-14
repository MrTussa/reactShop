import s from "./ProductCard.module.css";
import { Card, Carousel, Rate, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/shopSlice";
import { useState } from "react";
export default function ProductCard({
  item: { id, images, title, description, price, rating, discountPercentage },
  isPreview = false,
}) {
  const navigate = useNavigate();
  const { userCart } = useSelector((state) => state.shop);
  const [messageApi, contextHolder] = message.useMessage();
  const [badgeCount, setBadgeCount] = useState(userCart.length);
  const dispatch = useDispatch();
  const addItem = (item) => {
    messageApi.open({
      type: "success",
      content: "Добавлено в корзину",
    });
    setBadgeCount(badgeCount + 1);
    dispatch(addToCart(item));
  };
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
      {contextHolder}
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
            <Button
              onClick={() => navigate(`/products/${id}`)}
              className={s.button}
            >
              Подробнее
            </Button>
            <div className={s.decoration}>|</div>
            <Button
              className={s.button}
              onClick={() => addItem({ title: title, price: price })}
            >
              В корзину
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
