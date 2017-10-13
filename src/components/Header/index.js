import React from 'react'
import {
    Link,
} from 'react-router-dom'

import Styles from './home-m.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <ul>
                    <li className={Styles.red}><Link to="/">Home</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header
