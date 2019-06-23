import React from 'react';

class MyLocation extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { lat:null, lon:null };
  }
  
  render() {
    return (        
        <p>Function return value is : { this.state.lat } </p>        
    );
  }

  componentDidMount() {
    this.getLocation().then(result=> this.setState({lat: result.lat}));
  }

  getLocation () {
    return new Promise( (resolve) => {
      setTimeout(()=> resolve( {lat:10, lon:11}), 10000);
    });
  }
}

export default MyLocation
