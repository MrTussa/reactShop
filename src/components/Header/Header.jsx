import { Layout, Menu } from "antd";
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css";

export default function Header({ }) {
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
