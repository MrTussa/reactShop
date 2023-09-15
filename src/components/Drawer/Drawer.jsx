import s from "./Drawer.module.css";
import { Drawer as AntdDeawer, Space, Button } from "antd";
import { useSelector } from "react-redux";
export default function Drawer({ onClose, open }) {
  const { userCart } = useSelector((state) => state.shop);
  let index = 0;
  return (
    <AntdDeawer
      title="Корзина"
      placement="right"
      width={300}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      {userCart?.map((item) => {
        index++;
        return (
          <div className={s.listItem} key={index}>
            <p key={index}>{item.title}</p>
            <p key={index}>${item.price}</p>
          </div>
        );
      })}
    </AntdDeawer>
  );
}
