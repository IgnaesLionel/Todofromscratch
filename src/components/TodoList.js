import React from 'react';
import '../css/todoList.css';
import Todo from './Todo';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from "react-icons/fa";

const TodoList = ({myString, myArray}) => {
  return (
    <React.Fragment>
      <header className="App-header">
        <h1> Todo List </h1>
        <h2>{myString}</h2>
        <h4>{myArray.map((indexdata) => <Todo task={indexdata}  key={indexdata.id}/>) }</h4>
      </header>
      <footer className ="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
          <a href = '/App' className = "btn btn-outline-dark bg-light"> <FaListAlt/> </a>
          <a href = '/Completed' className = "btn btn-outline-dark bg-light"> <FaCheckSquare/> </a>
          <a href = '/Add' className = "btn btn-outline-dark bg-light"> <FaPlusSquare/> </a>
        </div>
        <button className = "btn btn-outline-dark bg-light"> <FaTrash/> </button>
      </footer>
    </React.Fragment>
  );
}
export default TodoList;
