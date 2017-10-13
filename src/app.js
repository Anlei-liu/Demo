import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import HomePage from './containers/HomePage'
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={ HomePage }/>
        </div>
    </Router>
    , document.querySelector('#main'))

if (module.hot) {
    module.hot.accept();
}
