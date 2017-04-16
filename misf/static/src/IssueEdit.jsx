import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default class IssueEdit extends React.Component {
 render() {
   return (
     <div>
     <p>Edit issue {this.props.params.id}</p>
     <Link to="/issues">Return to issue list</Link>
     </div> 
   );
  }
 }

IssueEdit.propTypes = {
   params: PropTypes.object.isRequired,
};
