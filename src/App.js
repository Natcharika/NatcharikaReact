import React,{useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import axios from 'axios'; 

const { Header, Sider, Content } = Layout;
  
function App() {
  
  const [collapseds,setcollapseds] = useState(false);
  const [image,setImage] = useState("");
  const [content,setContent] = useState(<div></div>);

  const toggle = () => {
    setcollapseds(!collapseds)
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapseds}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={
            () => 
            axios.get('http://127.0.0.1:5000/api').then(respons=>setImage(respons.data))
            .then(setContent(
            <img src={`data:image/jpeg;base64,${image}`} width="300px"/>
            ))
          }>
            Nat
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapseds ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
