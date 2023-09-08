import { Layout, Menu } from "antd";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from "./Header.module.css";

export default function Header({ }) {
  const { userToken } = useSelector((state) => state.auth)
  const menuItems = [
    {
      key: 1,
      label: <NavLink to="/">Главная</NavLink>,
    },
    {
      key: 2,
      label: <NavLink to="/products">Продукты</NavLink>,
    },
    {
      key: 3,
      label: <NavLink to="/blog">Блог</NavLink>,
    },
    {
      key: 4,
      label: userToken ? <NavLink to="/profile">Профиль</NavLink> : <NavLink to="/login">Войти</NavLink>,
    },
  ];
  return (
    <Layout.Header className={s.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Layout.Header>
  );
}
