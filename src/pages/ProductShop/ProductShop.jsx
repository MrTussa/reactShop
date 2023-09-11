import s from "./ProductShop.module.css";
import { Spin, Alert, List } from "antd";
import { ProductCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProductShop({}) {
  const [serverData, setServerData] = useState();
  const backendURL = import.meta.env.VITE_API;
  useEffect(() => {
    getData();
  }, []);
  const { innerWidth: width } = window;
  async function getData() {
    try {
      const {
        data: { products },
      } = await axios.get(`${backendURL}/products`);
      setServerData(products);
    } catch (error) {
      return error.message;
    }
  }

  const listColumn = () => {
    if (width > 1500) {
      return 5;
    } else if (width > 1124) {
      return 4;
    } else if (width > 524) {
      return 3;
    } else if (width < 524) {
      return 2;
    }
  };
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
          grid={{ gutter: 16, column: listColumn() }}
          dataSource={serverData}
          renderItem={(item) => (
            <List.Item>
              <ProductCard item={item} />
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
