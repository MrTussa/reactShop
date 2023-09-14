import s from "./AboutPage.module.css";
import { Card, Carousel, Rate, Button } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AboutPage() {
  const API_URL = import.meta.env.VITE_API;
  const { id } = useParams();
  const [serverData, setServerData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/${id}`);
        setServerData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(serverData);
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
            onClick={() => addCart({ title: title, price: price })}
          >
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
}
