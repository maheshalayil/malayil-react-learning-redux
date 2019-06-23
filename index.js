import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import reducers from './reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import EmpList from './components/employeelist';

class App extends Component {
  
  render() {
    return (
      <div>
       <h1>React + Redux in action</h1>
       <EmpList />
      </div>
    );
  }
}

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));
