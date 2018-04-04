import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory  from 'history/createBrowserHistory'
// import { syncHistoryWithStore } from 'react-router-redux'

import store from './middleware/store';
import App from './components/App';
const history = createHistory();

// const history = syncHistoryWithStore(createHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <App />
    </Router>
  </Provider>
  , document.querySelector('#main'),
);

if (module.hot) {
  module.hot.accept();
}
