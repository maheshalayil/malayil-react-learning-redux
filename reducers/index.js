import { combineReducers } from 'redux';

const employees = (currentEmployees=[], action) => {
  if(action.type === 'LOAD_EMP') 
    return [...currentEmployees];
  if(action.type === 'ADD_EMP') 
    return [...currentEmployees, action.payload];
  return currentEmployees; 
}

const selectedEmployee = (selectedEmployee={}, action) => {
  if(action.type === 'SELECT_EMP')
    return action.payload;

  return selectedEmployee;
}

export default combineReducers( {
  employees,
  selectedEmployee
})