import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
