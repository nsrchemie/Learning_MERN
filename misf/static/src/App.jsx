import 'babel-polyfill';
import IssueList from './IssueList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, withRouter, Route, Redirect, hashHistory } from 'react-router';
import IssueEdit from './IssueEdit.jsx';
import PropTypes from 'prop-types';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p> Page Not Found</p>;

const App = (props) => (
<div>
 <div className="header">
   <h1>Issue Tracker </h1>
 </div>
 <div className="contents">
  {props.children}
 </div>
 <div className="footer">
  Project based on PRO MERN book
 </div>
</div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};


const RoutedApp = () => (
  <Router history={hashHistory}>
    <Redirect from="/" to="/issues" />
    <Route path="/" component={App}>
    <Route path="/issues" component={withRouter(IssueList)} />
    <Route path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
