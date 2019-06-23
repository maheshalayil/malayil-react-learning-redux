import React from 'react';

export default class GitUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.users.map(x => {
      return <div key={x.login} className="col">{x.login}</div> 
      });
    return (
      <div className="row">
        {list}
      </div>      
    );
  }
}