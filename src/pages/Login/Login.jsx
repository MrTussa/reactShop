import s from "./Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from '../../store/authSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/authActions";
import clsx from "clsx";
export default function Login({ }) {
  const { loading, error, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = (data) => {
    console.log(data);
    dispatch(userLogin(data));
  };
  console.log(userInfo);
  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfo(userInfo));
      navigate("/")
    }
  }, [userInfo]);

  return (
    <div className={s.container}>
      <Form
        name="normal_login"
        className={s.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={submitForm}
      >
        <Form.Item
          className={s.div}
          name="username"
          rules={[
            {
              required: true,
              message: "Подалуйста введите Username!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          className={s.div}
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item className={s.buttonMargin}>
          <Button className={s.button} type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <hr />
        <Form.Item className={s.buttonMargin}>
          <Button
            className={clsx(s.button, s.register)}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
        {error && (
          <Form.Item className={s.buttonMargin}>
            <div className={s.error}>{error}</div>
          </Form.Item>
        )}
        {loading && (
          <Form.Item className={s.buttonMargin}>
            <div className={s.error}>
              <Spin size="large" />
            </div>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}
