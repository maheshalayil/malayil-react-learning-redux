import React from 'react'
import { connect } from 'react-redux';
import { selectEmployee, loadEmployee, addEmployee } from '../actions';

class EmpList extends React.Component {
  state = { name: '' };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    this.props.add({name: this.state.name});
    this.setState({name:''});
  }

  render() {
      return (        
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.name} onChange={e=> this.setState({name: e.target.value })} />
          </form>
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

  componentDidMount() {
    this.props.load();
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
  select : selectEmployee,
  load: loadEmployee,
  add: addEmployee
})(EmpList)