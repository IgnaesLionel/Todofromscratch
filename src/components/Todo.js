import React from 'react';

class Todo extends React.Component {

state = {
  completed : this.props.task.completed
}

toggleCompleted = () => {
  this.setState(prevState => ({
    completed: !prevState.completed
  }))
}
  render () {
    return (
      <li className= {"list-group-item d-flex align-items-center" + (this.state.completed? 'bg-success' : null)}>
        <h5> {this.props.task.name} {this.props.task.id} </h5>
        {console.log (this.props)}
      <button className={"btn btn-sm ml-auto" + (this.state.completed? 'btn-success': 'btn-outline-sucess')} onClick={()=> this.toggleCompleted()}>  x </button>
      </li>
    )
  }
}

export default Todo
