import { combineReducers } from 'redux';
import { gitUsers } from '../reducers/gituser';
import { employees, selectedEmployee } from '../reducers/employee';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const combineReducer =  combineReducers( {
  employees,
  selectedEmployee,
  gitUsers
})

const configureStore = () => {
  return createStore(combineReducer, applyMiddleware(thunk));
}

export default configureStore;