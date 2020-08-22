import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import Accueil from './components/Accueil';
import Login from './components/Login';
import Nav from './components/Nav'
import Add from './components/Add'
import CompletedTask from './components/CompletedTask'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import './css/todoList.css';

let myArray = [{ id : "jserv001", name: "Bayman", completed: false}, { id : "jserv002", name: "Hiro", completed: false}, { id : "jserv003", name: "Jelly Moon", completed: false}]
let myString = "Les nouveaux Heros"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Switch>
      <Route path = "/" exact component={Accueil}/>
      <Route path = "/Login" component={Login}/>
      <Route path = "/App" render = {(props) => <TodoList {...props} myString = {myString} myArray = {myArray}/> }/>
      <Route path = "/Contact" component={Contact}/>
      <Route path = "/Add" component={Add}/>
      <Route path = "/CompletedTask" component={CompletedTask}/>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
