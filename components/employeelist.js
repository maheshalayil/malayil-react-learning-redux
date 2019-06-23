import React from 'react'
import { connect } from 'react-redux';

class EmpList extends React.Component {
  
  render() {
      return (
        <div>
          EmpList ( { this.props.employees.length } )
        </div>
      );
  }
}

let mapState = (state) =>  {
  console.log(state)
  return {
    employees: state.employees
  }
}

export default connect(mapState)(EmpList)