import s from "./ProductShop.module.css";
import { Spin, Alert, List, Pagination } from "antd";
import { ProductCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProductShop({}) {
  const [serverData, setServerData] = useState();
  const [page, setPage] = useState(1);
  const API_URL = import.meta.env.VITE_API;
  useEffect(() => {
    setServerData([]);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/products?skip=${30 * (page - 1)}`
        );
        console.log("Suces", data);
        setServerData(data.products);
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
                <ProductCard item={item} />
              </List.Item>
            )}
          />
          <Pagination defaultCurrent={1} onChange={pageSwitch} total={50} />
        </>
      )}
    </div>
  );
}
