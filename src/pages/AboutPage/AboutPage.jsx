import s from "./AboutPage.module.css";
import { Card, Carousel, Rate, Button, Spin, Alert, message } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/shopSlice";
import axios from "axios";
export default function AboutPage({}) {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const addItem = (item) => {
    messageApi.open({
      type: "success",
      content: "Добавлено в корзину",
    });
    dispatch(addToCart(item));
  };
  const API_URL = import.meta.env.VITE_API;
  const { id } = useParams();
  const [serverData, setServerData] = useState(null);
  console.log(serverData);
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
    <>
      {!serverData ? (
        <div>
          <Spin size="large">
            <Alert message={<br />} description={<br />} type="info" />
          </Spin>
        </div>
      ) : (
        <Card
          key={id}
          bodyStyle={{ padding: "0" }}
          cover={
            <Carousel>
              {serverData.images.map((url) => {
                return (
                  <div key={id}>
                    <img
                      className={s.img}
                      key={id}
                      alt={serverData.title}
                      src={serverData.url}
                    />
                  </div>
                );
              })}
            </Carousel>
          }
        >
          {contextHolder}
          <div className={s.content}>
            <div className={s.card}>
              <span className={s.title}>{serverData.title}</span>
              <span className={s.desc}>{serverData.description}</span>
              <div className={s.details}>
                <span className={s.price}>${serverData.price}</span>
                {serverData.discountPercentage ? (
                  <div>
                    <span className={s.rating}>
                      <Rate
                        allowHalf
                        disabled
                        defaultValue={serverData.rating}
                      />
                    </span>
                    <hr className={s.hr} />
                    <span className={s.discount}>
                      Discount {Math.round(serverData.discountPercentage)}%
                    </span>
                  </div>
                ) : (
                  <span className={s.rating}>
                    <Rate allowHalf disabled defaultValue={serverData.rating} />
                  </span>
                )}
              </div>
            </div>
            <div className={s.buttonContainer}>
              <Button
                className={s.button}
                onClick={() =>
                  addItem({ title: serverData.title, price: serverData.price })
                }
              >
                В корзину
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
