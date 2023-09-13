import s from "./SearchPage.module.css";
import { List, Spin, Card, Alert } from "antd";
import { ProductCard } from "../../components";
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
export default function SearchPage({ }) {
  const [serverData, setServerData] = useState([]);
  const API_URL = import.meta.env.VITE_API;
  const [params] = useSearchParams()
  const searchName = params.get("q")
  const searchType = params.get("type")
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/${searchType}?limit=10&q=${searchName}`)
        setServerData(data[searchType]);
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  console.log(serverData)
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
                    <ProductCard item={item} />
                  </List.Item>
                )
            }
          />
        )}
    </div>
  );
}
