import s from './Main.module.css'
import { Layout, theme, List, Spin, Card } from 'antd';
import { Header, ProductCard } from '../../components';
import { useEffect, useState } from 'react'
import axios from 'axios'
const { Content, Footer } = Layout;
export default function Main({ }) {
  const [serverData, setServerData] = useState()
  console.log();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const backendURL = import.meta.env.VITE_SOME_KEY
  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    try {
      const shop = await axios.get(`${backendURL}/products?limit=3`)
      const posts = await axios.get(`${backendURL}/posts?limit=3&skip=10`)
      const data = [...posts.data.posts, ...shop.data.products]
      setServerData(data)
      console.log(data[3]);
    } catch (error) {
      return (error.message)
    }
  }
  return (
    <Layout className="layout">

      <Header></Header>

      <Content className={s.contentContainer}>
        <div className={s.content} style={{ background: colorBgContainer }}>
          {!serverData ? (
            <div>
              <Spin size="large" />
            </div>
          ) : (
              <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={serverData}
                renderItem={(item, index) =>
                  index < 3 ?
                    (<List.Item>
                      <Card title={item.title}>{item.body}</Card>
                    </List.Item>) :
                    (<List.Item>
                      <ProductCard item={item}/>
                    </List.Item>)

                }
              />
            )}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Developed by MRTusa</Footer>
    </Layout>
  );
}