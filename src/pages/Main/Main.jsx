import s from "./Main.module.css";
import { List, Spin, Card, Alert } from "antd";
import { ProductCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Main({}) {
  const [serverData, setServerData] = useState();
  const backendURL = import.meta.env.VITE_API;
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const shop = await axios.get(`${backendURL}/products?limit=3`);
      const posts = await axios.get(`${backendURL}/posts?limit=3&skip=10`);
      const data = [...posts.data.posts, ...shop.data.products];
      setServerData(data);
    } catch (error) {
      return error.message;
    }
  }
  return (
    <div className={s.content}>
      {!serverData ? (
        <div>
          <Spin size="large">
            <Alert message={<br />} description={<br />} type="info" />
          </Spin>
        </div>
      ) : (
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={serverData}
          renderItem={(item, index) =>
            index < 3 ? (
              <List.Item>
                <Card title={item.title}>{item.body}</Card>
              </List.Item>
            ) : (
              <List.Item>
                <ProductCard item={item} isPreview={true}/>
              </List.Item>
            )
          }
        />
      )}
    </div>
  );
}
