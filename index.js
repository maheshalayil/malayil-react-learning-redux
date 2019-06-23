import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MaheshComp from './MaheshFunction';
import ImageComp from './ImageComponent';
import MyForm from './MyForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <MyForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
