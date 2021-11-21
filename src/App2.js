import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import Chart1 from './Chart1';
import Chart1Val from './Chart1-2';

const { Header, Sider, Content } = Layout;

function App2 (){

    const[collapseds,setcollapseds] = useState(false);
    const[content,setContent] = useState(<div></div>);
    const[image,setImage] = useState("");
    const [csvtojson,setCsv] = useState(<div></div>);
    const[content2,setContent2] = useState(<div></div>);

    
    const toggle = () => {
        setcollapseds(!collapseds)
      };
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapseds}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />} onClick = {() => 
                axios.get('http://127.0.0.1:5000/api').then(respons=>setImage(respons.data)).then(setContent(
                <img src = {`data:image/jpeg;base64,${image}`} width = "300px"/>))}>
                nav 1
              </Menu.Item>
              {/* <Menu.Item key="2" icon={<UserOutlined />} onClick = {() => 
                axios.get('http://127.0.0.1:5000/csv').then(respons=>(setCsv(respons)))}>
                nav 2
              </Menu.Item> */}
              <Menu.Item key="2"  onClick = {() => 
                axios.get('http://127.0.0.1:5000/csv').then(respons=>(setCsv(respons.data))).then(
                    setContent2(<table>
                                <tr key={"header"}>
                                    {Object.keys(csvtojson[0]).map((key) => (
                                    <th>{key}</th>
                                    ))}
                                </tr>
                                {csvtojson.map((item) => (
                                    <tr key={item.BraTS21ID}>
                                    {Object.values(item).map((val) => (
                                        <td>{val}</td>
                                    ))}
                                    </tr>
                                ))}
                            </table>))}>
              nav 2
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
             <Chart1/>
             {content2}
            </Content>
          </Layout>
        </Layout>
      );
}

export default App2;
