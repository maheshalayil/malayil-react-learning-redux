import { SELECT_EMP, LOAD_EMP, ADD_EMP } from '../actions/types'

export const employees = (currentEmployees=[], action) => {
  if(action.type === LOAD_EMP) 
    return [...currentEmployees];
  if(action.type === ADD_EMP) 
    return [...currentEmployees, action.payload];
  return currentEmployees; 
}

export const selectedEmployee = (selectedEmployee=null, action) => {
  if(action.type === SELECT_EMP)
    return action.payload;

  return selectedEmployee;
}
