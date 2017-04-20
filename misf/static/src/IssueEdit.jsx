import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default class IssueEdit extends React.Component {
render() {
return (
     <div>
       <p>Placeholder for editing issue {this.props.params.id}</p>
       <Link to="/issues">Back To Issue List</Link>
    </div>
);
}
}

IssueEdit.propTypes = {
  params: PropTypes.object.isRequired,
};