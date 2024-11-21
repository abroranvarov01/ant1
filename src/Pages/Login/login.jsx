import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useLogin } from "../../service/mutation/useLogin";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const onFinish = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        navigate("/app");
      },
      onError: (error) => {
        console.log("Failed:", error);
      },
    });
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
      style={{ maxWidth: 300, margin: "0 auto" }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a href="" style={{ float: "right" }}>
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
        <Typography.Text>
          Or <Link to="/register">register now!</Link>
        </Typography.Text>
      </Form.Item>
    </Form>
  );
};

export default Login;
