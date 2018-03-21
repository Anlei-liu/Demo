import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import HomePage from '../containers/HomePage'
import Login from '../containers/Login'

class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={ HomePage }/>
                        <Route path="/login" component={ Login }/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default BaseLayout
