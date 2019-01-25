import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

class App extends Component {
  componentWillMount() {
    axios.get('http://localhost:5000/v1')
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.error(e)
      })
  }
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer>
          Footer Content
        </Footer>
      </Layout>
    );
  }
}

export default App;
