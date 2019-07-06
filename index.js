import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Provider } from 'react-redux';
import configureStore from './store';

import EmpList from './components/employeelist';
import EmpDetail from './components/empdetail';
import GitUsers from './components/gitusers';


class App extends Component {
  
  render() {
    return (
      <div>
       <h1>React + Redux in action</h1>
       <EmpList />
       <EmpDetail />

       <GitUsers />
      </div>
    );
  }
}

let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
