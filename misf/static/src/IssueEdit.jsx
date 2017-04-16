import React from 'react';
import { Link } from 'react-router';

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
   params: React.PropTypes.object.isRequired,
};
