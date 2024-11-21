import React from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet, Navigate } from "react-router-dom";
import { loadState } from "../config/storge";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const user = loadState("user");

  if (!user) {
    return <Navigate to="/" />;
  }

  const items = [
    {
      key: "1",
      label: <Link to="/app">Debts</Link>,
    },
    {
      key: "2",
      label: <Link to="/app/user">Edit Debt</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
