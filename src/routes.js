import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App, { About, Home } from './components/pages';

export default (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={About} path="about" />
    </Route>
  </Router>
);
