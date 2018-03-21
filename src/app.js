import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './middleware/store';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
      { routes() }
  </Provider>
  , document.querySelector('#main'),
);

if (module.hot) {
  module.hot.accept();
}
