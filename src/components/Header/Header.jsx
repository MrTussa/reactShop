import { Layout, Menu, Input, Button, Select } from "antd";
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Header.module.css";

export default function Header({ }) {
  const [searchType, setSearchType] = useState("products")
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate()
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
      label: userToken ? (
        <NavLink to="/profile">Профиль</NavLink>
      ) : (
          <NavLink to="/login">Войти</NavLink>
        ),
    },
  ];
  const onSearch = value => {
    navigate(`/search?q=${value}&type=${searchType}`)
  }
  const selectSearch = (
    <Select defaultValue="products" onChange={(value) => setSearchType(value)} className={s.select}>
      <Select.Option value="products">Продукты</Select.Option>
      <Select.Option value="posts">Посты</Select.Option>
    </Select>
  );
  return (
    <Layout.Header className={s.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
      <div className={s.menu}>
        <Input.Search onSearch={(value) => onSearch(value)} addonBefore={selectSearch} />
        <Button></Button>
      </div>
    </Layout.Header>
  );
}
