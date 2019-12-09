import React, { useState } from "react";
import { Layout } from "antd";
import LeftMenu from "../Menu";
import TopHeader from "../Header";

const { Footer, Sider, Content } = Layout;
const INIT_KEY = "0";
function MainLayout(props: any) {
  const [current, setCurrent] = useState(INIT_KEY);
  const [collapsed] = React.useState(false);

  const menuable = current.length > 5 || true;

  const left = menuable ? undefined : "5%";

  const changeRootMenu = (key: string) => setCurrent(key);

  const MainContent = (
    <Layout>
      {menuable && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          // style={{backgroundColor: '#fff'}}
        >
          <LeftMenu />
        </Sider>
      )}
      <Layout>
        <TopHeader left={left} current={current} onClick={changeRootMenu} />
        <Content
          className={props.className}
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
        <Footer>©2019 Created by Skio, All Rights Reserved.</Footer>
      </Layout>
    </Layout>
  );

  return MainContent;
}

export default MainLayout;
