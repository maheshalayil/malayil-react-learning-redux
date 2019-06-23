import React from 'react'

class SearchField extends React.Component {
  state = { term: null };
  
  onInputChange = (e) => {
    this.setState( { term: e.target.value });    
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onInputChange} />
      </form>
    )
  }
}

export default SearchField