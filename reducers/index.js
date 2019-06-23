import { combineReducers } from 'redux';

const employees = () => {
  return [
    {name:'mahesh'},
    {name:'praveen'}
  ]
}

const selectedEmployee = (selectedEmployee=null, action) => {
  if(action.type === 'SELECT_EMP')
    return action.payload;
    
  return selectedEmployee;
}

export default combineReducers( {
  employees,
  selectedEmployee
})