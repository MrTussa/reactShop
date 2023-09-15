import s from "./BlogPage.module.css";
import { List, Spin, Card, Alert, Pagination } from "antd";
import { ProductCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";
export default function BlogPage({}) {
  const [serverData, setServerData] = useState([]);
  const [page, setPage] = useState(1);
  const API_URL = import.meta.env.VITE_API;
  useEffect(() => {
    setServerData([]);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/posts?skip=${30 * (page - 1)}`
        );
        console.log("Suces", data);
        setServerData(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page]);
  const pageSwitch = (current) => {
    setPage(current);
  };
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
  return (
    <div className={s.content}>
      {!serverData ? (
        <div>
          <Spin size="large">
            <Alert message={<br />} description={<br />} type="info" />
          </Spin>
        </div>
      ) : (
        <>
          <List
            grid={{ gutter: 16, column: listColumn() }}
            dataSource={serverData}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>{item.body}</Card>
              </List.Item>
            )}
          />
          <Pagination defaultCurrent={1} onChange={pageSwitch} total={50} />
        </>
      )}
    </div>
  );
}
