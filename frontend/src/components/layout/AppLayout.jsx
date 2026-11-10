import { Layout, Menu } from "antd";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  BookOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";

const { Sider, Header, Content } = Layout;

const menuItems = [
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/learning", icon: <BookOutlined />, label: "Learning" },
];
const AppLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen">
      <Sider theme="light" breakpoint="lg" collapsedWidth={0}>
        <div className="p-4 text-center text-lg font-bold text-indigo-500">
          LearnBoard
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout>
        <Header className="!bg-white px-4 font-medium">Header</Header>
        <Content className="p-4 md:p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
