import 'babel-polyfill';
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Redirect, hashHistory } from 'react-router';
import { HashRouter, withRouter, Route, Miss, Redirect, BrowserRouter as Router } from 'react-router-dom';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');

const RoutedApp = () => (
  <Router>
   <div>
    <Redirect from="/" to="/issues" />
    <Route path="/issues" component={withRouter(IssueList)} />
    <Route path="/issues/:id" render={props => <IssueEdit {...props.match.params} />} />
    <Route path="*" render={() => <p>Page Not Found</p>} />
   </div>
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
