import s from './Main.module.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
export default function Main({}) {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
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
      ]
      return (
        <Layout className="layout">
          <Header className={s.header}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={menuItems}
            />
          </Header>
    
    
          <Content className={s.contentContainer}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className={s.content} style={{ background: colorBgContainer }}>
              Content
            </div>
          </Content>
    
    
    
    
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      );
}