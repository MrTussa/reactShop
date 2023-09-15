import s from "./SearchPage.module.css";
import { List, Spin, Card, Alert } from "antd";
import { ProductCard } from "../../components";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SearchPage({}) {
  const [serverData, setServerData] = useState([]);
  const API_URL = import.meta.env.VITE_API;
  const [params] = useSearchParams();
  const searchName = params.get("q");
  const searchType = params.get("type");
  useEffect(() => {
    setServerData([]);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/${searchType}/search?&q=${searchName}`
        );
        console.log("Suces", data);
        setServerData(data[searchType]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params]);

  const { innerWidth: width } = window;
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

  console.log(serverData);
  console.log(`${API_URL}/${searchType}/search?&q=${searchName}`);
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
          renderItem={(item) =>
            searchType === "posts" ? (
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
