import React from 'react';
import { connect } from 'react-redux';

let EmpDetail = (props) => {
  return <p>selected emp is {props.employee.name}</p>;
}

let mapStateToProps = (state) => {
  return { employee : state.selectedEmployee };
}

export default connect(mapStateToProps)(EmpDetail);