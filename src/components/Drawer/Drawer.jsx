import s from "./Drawer.module.css";
import {Drawer as AntdDeawer, Space, Button } from "antd";
import {useSelector} from 'react-redux';
export default function Drawer({onClose, open}) {
  const {userCart} = useSelector((state) => state.shop)
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
        {userCart?.map((item, index)=> {
          return(
            <p key={index}>{item}</p>
          )
        })}
      </AntdDeawer>
  );
}
