import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import Accueil from './components/Accueil';
import Login from './components/Login';
import Nav from './components/Nav'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';

let myArray = ["Bayman", "Hiro","Honey Lemon", "Wasabi","Tadashi Hamada"]
let myString = "Les nouveaux Heros"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Route path = "/" exact component={Accueil}/>
      <Route path = "/Login" component={Login}/>
      <Route path = "/App" render = {(props) => <TodoList {...props} myString = {myString} myArray = {myArray}/> }/>
      <Route path = "/Contact" component={Contact}/>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
