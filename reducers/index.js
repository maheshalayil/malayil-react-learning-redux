import { combineReducers } from 'redux';

const employees = () => {
  return [
    {name:'mahesh'},
    {name:'praveen'}
  ]
}

export default combineReducers( {
  employees
})