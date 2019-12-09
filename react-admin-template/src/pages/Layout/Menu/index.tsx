import React from "react";

import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

//TODO: useMemo to opt it
function LeftMenu() {
  const menuable = 1;
  const leftMenu = menuable ? (
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Icon type="user" />
        <Link to="/">
          <span>主页</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="upload" />
        <Link to="/login">
          <span>登陆页面</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="upload" />
        <Link to="/404">
          <span>404页面</span>
        </Link>
      </Menu.Item>
    </Menu>
  ) : null;

  return leftMenu;
}

export default LeftMenu;
