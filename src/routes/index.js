import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BaseLayout} />
      <Route path="/backend" component={BaseLayout} />
    </Switch>
  </BrowserRouter>
);

export default routes;
