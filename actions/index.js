export const selectEmployee = (emp) => {
  return {
    type: 'SELECT_EMP',
    payload: emp
  }
}