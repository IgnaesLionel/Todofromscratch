import React from 'react';

class Todo extends React.Component {
  render () {
    return (
      <li className= "list-group-item d-flex align-items-center"> {this.props.task}</li>
    )
  }
}
export default Todo
