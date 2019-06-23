import React from 'react';
import { connect } from 'react-redux';

let EmpDetail = ( {employee} ) => {
  if(employee)
    return <p>selected emp is {employee.name}</p>;
  return <p>no employee selected</p>
}

let mapStateToProps = (state) => {
  return { employee : state.selectedEmployee };
}

export default connect(mapStateToProps)(EmpDetail);