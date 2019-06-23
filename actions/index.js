import gitAPI from '../gitApi';

export const selectEmployee = (emp) => {
  return {
    type: 'SELECT_EMP',
    payload: emp
  }
}

export const loadEmployee = () => {
  return {
    type: 'LOAD_EMP'
  }
}

export const addEmployee = (emp) => {
  return {
    type: 'ADD_EMP',
    payload: emp
  }
}

export const loadGitUsers = () => async dispatch => {
  var response = await gitAPI.get('/users')
  dispatch({
    type: 'LOAD_GITUSERS',
    payload: response.data
  });
}