import s from "./ProductShop.module.css";
import { Layout, theme } from "antd";
import { Header } from "../../components";
const { Content, Footer } = Layout;
export default function ProductShop({}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header></Header>
      <Content className={s.contentContainer}>
        <div className={s.content} style={{ background: colorBgContainer }}>
          Content
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>Developed by MRTusa</Footer>
    </Layout>
  );
}
