import { combineReducers } from 'redux';
import { gitUsers } from './gituser';
import { employees, selectedEmployee } from './employee';


export default combineReducers( {
  employees,
  selectedEmployee,
  gitUsers
})