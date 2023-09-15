import { Layout, Menu, Input, Button, Select, Badge } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Drawer from "../Drawer";
import { useSelector } from "react-redux";
import s from "./Header.module.css";

export default function Header({}) {
  const [searchType, setSearchType] = useState("products");
  const { userToken } = useSelector((state) => state.auth);
  const { userCart } = useSelector((state) => state.shop);

  const [badgeCount, setBadgeCount] = useState(0);
  useEffect(() => {
    setBadgeCount(userCart.length);
  }, [userCart]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSearch = (value) => {
    navigate(`/search?q=${value}&type=${searchType}`);
  };
  const selectSearch = (
    <Select
      defaultValue="products"
      onChange={(value) => setSearchType(value)}
      className={s.select}
    >
      <Select.Option value="products">Продукты</Select.Option>
      <Select.Option value="posts">Посты</Select.Option>
    </Select>
  );
  return (
    <Layout.Header className={s.header}>
      <div className={s.menu}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <Input.Search
          onSearch={(value) => onSearch(value)}
          addonBefore={selectSearch}
          style={{ width: "50%" }}
        />
        <div className={s.menuButtons}>
          {userToken ? (
            <NavLink to="/profile">
              <Button type="primary">Профиль</Button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Button type="primary">Войти</Button>
            </NavLink>
          )}

          <Badge count={badgeCount}>
            <Button type="primary" onClick={showDrawer}>
              <ShoppingCartOutlined /> Корзина
            </Button>
          </Badge>
        </div>
        <Drawer onClose={onClose} open={open} />
      </div>
    </Layout.Header>
  );
}
