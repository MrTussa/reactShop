import s from "./UserProfile.module.css";
import { ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Avatar, Card } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function UserProfile({}) {
  const {
    userInfo: { image, gender, lastName, firstName, email, username },
  } = useSelector((state) => state.auth);
  return (
    <div className={s.container}>
      <Card className={s.card} bodyStyle={{ padding: "0px" }}>
        <div className={s.content}>
          <Avatar
            shape="circle"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<img alt="avatar" src={image}></img>}
          />
          <span className={s.username}>{username}</span>
          <div className={s.userDetail}>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
          <span>{email}</span>
          <span>{gender}</span>
        </div>
        <div className={s.buttons}>
          <NavLink to="/">
            <Button
              className={`${s.toMain} ${s.button}`}
              type="primary"
              icon={<ArrowLeftOutlined />}
              size="large"
            >
              Назад на Главную
            </Button>
          </NavLink>
          <NavLink to="/logout">
            <Button
              className={`${s.logout} ${s.button}`}
              type="primary"
              icon={<LogoutOutlined />}
              size="large"
            >
              Выйти
            </Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
}
