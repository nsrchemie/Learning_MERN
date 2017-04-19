import 'babel-polyfill';
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, withRouter, Route, Redirect, hashHistory } from 'react-router';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p> Page Not Found</p>;
const RoutedApp = () => (
  <Router history={hashHistory}>
    <Redirect from="/" to="/issues" />
    <Route path="/issues" component={withRouter(IssueList)} />
    <Route path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
