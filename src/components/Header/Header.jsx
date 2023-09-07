import { Layout, Menu } from "antd";
// const { Header as La } = Layout;
import s from "./Header.module.css";

export default function Header({}) {
  const menuItems = [
    {
      key: 1,
      label: "Главная",
    },
    {
      key: 2,
      label: "Продукты",
    },
    {
      key: 3,
      label: "Блог",
    },
  ];
  return (
    <Layout.Header className={s.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menuItems}
      />
    </Layout.Header>
  );
}
