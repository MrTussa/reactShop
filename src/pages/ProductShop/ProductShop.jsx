import s from "./ProductShop.module.css";
import { Spin, Alert, List, Button, message, Badge } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductCard, Drawer } from "../../components";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/shopSlice';
import { useEffect, useState } from "react";
import axios from "axios";
export default function ProductShop({ }) {
  const [serverData, setServerData] = useState();
  const { userCart } = useSelector((state) => state.shop)
  const [badgeCount, setBadgeCount] = useState(userCart.length);
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch()
  const API_URL = import.meta.env.VITE_API;
  useEffect(() => {
    getData();
  }, []);
  const { innerWidth: width } = window;
  async function getData() {
    try {
      const {
        data: { products },
      } = await axios.get(`${API_URL}/products`);
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

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const addItem = (item) => {
    messageApi.open({
      type: 'success',
      content: 'Добавлено в корзину',
    });
    setBadgeCount(badgeCount + 1);
    dispatch(addToCart(item))
  }


  return (
    <div className={s.content}>
      {contextHolder}
      {!serverData ? (
        <div>
          <Spin size="large">
            <Alert message={<br />} description={<br />} type="info" />
          </Spin>
        </div>
      ) : (
          <>
            <Badge count={badgeCount}>
              <Button type="primary" onClick={showDrawer}>
                <ShoppingCartOutlined /> Корзина
      </Button>
            </Badge>
            <List
              grid={{ gutter: 16, column: listColumn() }}
              dataSource={serverData}
              renderItem={(item) => (
                <List.Item>
                  <ProductCard item={item} addCart={addItem} />
                </List.Item>
              )}
            />
          </>
        )}
      <Drawer onClose={onClose} open={open} />
    </div>
  );
}
