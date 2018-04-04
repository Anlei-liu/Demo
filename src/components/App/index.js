import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomePage from '../../containers/HomePage';
import Login from '../../containers/Login';


class App extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px' }}>
            <h1>Todos</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}
export default App;
