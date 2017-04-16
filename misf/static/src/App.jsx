import 'babel-polyfill';
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Redirect, hashHistory } from 'react-router';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () =><p>Page Not Found</p>;

const RoutedApp = () => (
  <HashRouter>
   <div>
    <Redirect from="/" to="/issues" />
    <Route path="/issues" component={IssueList} />
    <Route path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
   </div>
  </HashRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
