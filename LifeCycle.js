import React from 'react';

class LC extends React.Component {
 
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  render() {
    console.log('render');
  }

  componentDidMount() {
     console.log('componentDidMount');
  }

  componentDidUpdate() {
     console.log('componentDidUpdate');
  }
}

export default LC
