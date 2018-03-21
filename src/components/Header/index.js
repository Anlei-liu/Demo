import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <ul className={styles.nav}>
          <div>
            <li className={styles.red}><Link to="/">Home</Link></li>
            <li className={styles.red}><Link to="/login">login</Link></li>
          </div>
        </ul>
      </header>
    );
  }
}

export default Header;
