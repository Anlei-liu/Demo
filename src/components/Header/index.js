import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import styles from './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }} >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/login">login</Link></Menu.Item>
        </Menu>
    );
  }
}

export default Header;
