import React from 'react';
import '../css/todoList.css';
import Todo from './Todo';

const TodoList = ({myString, myArray}) => {
  return (
    <React.Fragment>
      <header className="App-header">
        <h1> Todo List </h1>
        <h2>{myString}</h2>
        <h4>{myArray.map((indexdata) => <Todo task={indexdata} />) }</h4>
        <Todo/>
      </header>
    </React.Fragment>
  );
}
export default TodoList;
