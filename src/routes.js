import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App, { AboutPage, HomePage } from './components/pages';

export default (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={HomePage} />
      <Route component={AboutPage} onEnter={AboutPage.load} path="about" />
    </Route>
  </Router>
);
