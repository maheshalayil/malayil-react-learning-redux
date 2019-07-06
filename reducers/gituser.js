import { LOAD_GITUSERS } from '../actions/types'

export const gitUsers = (gitUsers=[], action) => {
  if(action.type === LOAD_GITUSERS)
    return action.payload;

  return gitUsers;
}