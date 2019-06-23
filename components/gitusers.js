import React from 'react'


import { connect } from 'react-redux';
import { loadGitUsers } from '../actions';

class GitUsers extends React.Component {

  render() {
    return (
      <div>
        <h1>Git users</h1>
      </div>
    );
  }

  componentDidMount() {
    this.props.loadGitUsers();
  }
}

let mapState = (state) => { state.gitUsers };

export default connect(mapState, { loadGitUsers })(GitUsers);