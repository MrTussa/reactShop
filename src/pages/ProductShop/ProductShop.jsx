import s from "./ProductShop.module.css";
import { Layout, theme, Spin } from "antd";
import { Header } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from "../../store/shopActions";
import { useEffect } from 'react'
const { Content, Footer } = Layout;

export default function ProductShop({}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch()
  const { products, loading } = useSelector((state) => state.shop)
  useEffect(() => {
      dispatch(getAllProducts())
  }, []);
  return (
    <Layout className="layout">
      <Header></Header>
      <Content className={s.contentContainer}>
        <div className={s.content} style={{ background: colorBgContainer }}>
        {loading && (
            <div>
              <Spin size="large" />
            </div>
        )}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>Developed by MRTusa</Footer>
    </Layout>
  );
}
