import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/antd/dist/antd.css';

import store from './middleware/store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.querySelector('#main'),
);

if (module.hot) {
  module.hot.accept();
}
