import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
const store = createStore(reducers)


import HomePage from './containers/HomePage'
ReactDOM.render(
    <Router>
        <Provider store={ store }>
            <Route exact path="/" component={ HomePage }/>
        </Provider>
    </Router>
    , document.querySelector('#main'))

if (module.hot) {
    module.hot.accept();
}
