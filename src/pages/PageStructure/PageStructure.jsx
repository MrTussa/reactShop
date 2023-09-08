import s from './PageStructure.module.css'
import { Layout } from 'antd';
import { Header } from '../../components';
const { Content, Footer } = Layout;
export default function PageStructure({ children }) {
  return (
    <Layout className={s.layout}>
      <Header></Header>
      <Content className={s.contentContainer}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed by MRTusa</Footer>
    </Layout>
  );
}