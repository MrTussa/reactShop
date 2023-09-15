import s from "./Drawer.module.css";
import { Drawer as AntdDeawer, Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/shopSlice";
export default function Drawer({ onClose, open }) {
  const { userCart } = useSelector((state) => state.shop);
  let index = 0;
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <AntdDeawer
      title="Корзина"
      placement="right"
      width={300}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button type="primary" onClick={clear}>
            Очистить
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
