import React from 'react'
import { connect } from 'react-redux';
import { selectEmployee } from '../actions';

class EmpList extends React.Component {
  
  render() {
      return (
        <div>
          { 
            this.props.employees.map((e) => {
               return <button 
                  onClick={() => {
                    this.props.select(e);
                  }}>{e.name}</button> 
            }) 
          }
        </div>
      );
  }
}

let mapState = (state) =>  {
  console.clear();
  console.log(state)
  return {
    employees: state.employees
  }
}

export default connect(mapState, {
  select : selectEmployee
})(EmpList)