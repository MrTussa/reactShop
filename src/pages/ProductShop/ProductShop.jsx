import s from "./ProductShop.module.css";
import { Spin, Alert, List } from "antd";
import {  ProductCard } from '../../components';
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ProductShop({ }) {
  const [serverData, setServerData] = useState()
  const backendURL = import.meta.env.VITE_API
  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    try {
      const {data:{products}} = await axios.get(`${backendURL}/products`)
      setServerData(products)
      console.log(products);
    } catch (error) {
      console.log(error);
      return (error.message)
    }
  }
  return (
    <div className={s.content}>
    {!serverData ? (
      <div>
        <Spin size="large">
          <Alert
            message={<br/>}
            description={<br/>}
            type="info"
          />
        </Spin>
      </div>
    ) : (
        <List
          grid={{ gutter: 16, column: 5 }}
          dataSource={serverData}
          renderItem={(item) =>
              <List.Item>
                <ProductCard item={item}/>
              </List.Item>

          }
        />
      )}
  </div>
  );
}
