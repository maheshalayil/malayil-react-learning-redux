import gitAPI from '../gitApi';
import { LOAD_GITUSERS } from './types'

export const loadGitUsers = () => async dispatch => {
  var response = await gitAPI.get('/users')
  dispatch({
    type: LOAD_GITUSERS,
    payload: response.data
  });
}