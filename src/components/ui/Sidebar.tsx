"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "../Constants/sidebarItems";
import { USER_ROLE } from "../Constants/role";
import { getUserInfo } from "@/services/auth.service";


const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {role}= getUserInfo() as any;
  // console.log("role",role)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        UNIVERSITY-MS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;