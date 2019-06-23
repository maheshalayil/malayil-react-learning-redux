import { combineReducers } from 'redux';

const employees = (currentEmployees=[], action) => {
  if(action.type === 'LOAD_EMP') 
    return [...currentEmployees];
  if(action.type === 'ADD_EMP') 
    return [...currentEmployees, action.payload];
  return currentEmployees; 
}

const selectedEmployee = (selectedEmployee=null, action) => {
  if(action.type === 'SELECT_EMP')
    return action.payload;

  return selectedEmployee;
}

const gitUsers = (gitUsers=[], action) => {
  if(action.type === 'LOAD_GITUSERS')
    return action.payload;

  return gitUsers;
}

export default combineReducers( {
  employees,
  selectedEmployee,
  gitUsers
})