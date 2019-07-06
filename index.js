import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Provider } from 'react-redux';
import configureStore from './store';

import EmpList from './components/employeelist';
import EmpDetail from './components/empdetail';
import GitUsers from './components/gitusers';
import Test from './components/gitsearchbyeffect';


class App extends Component {
  
  render() {
    return (
      <div>
       <h1>React + Redux in action</h1>
       <EmpList />
       <EmpDetail />

       <GitUsers />

       <hr/>
       <Test />
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
