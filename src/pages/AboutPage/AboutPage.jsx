import s from "./AboutPage.module.css";
import { Container } from "antd";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
export default function AboutPage() {
  const API_URL = import.meta.env.VITE_API;
  const { id } = useParams()
  const [serverData, setServerData] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data,
        } = await axios.get(`${API_URL}/products/${id}`);
        setServerData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, []);
  console.log(serverData);
  return (
    <Container className={s.container}>

    </Container>
  )
}
