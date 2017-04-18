import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class IssueEdit extends React.Component {
render() {
// const IssueEdit = () => {
   return (
     <div>
     <p>Edit issue  {this.props.id}

     </p>
     <Link to="/issues">Return to issue list</Link>
     </div> 
   );
  }
 }

// const IssueEdit = (props) => (
// 	<div>
// 	  <p>Edit issue {this.props.id}</p>
//        <Link to="/issues">Return to issue list</Link>
//     </div> 
// 	)

IssueEdit.PropTypes = {
   params: PropTypes.object.isRequired,
};