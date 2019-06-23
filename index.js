import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import reducers from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

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

let store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
