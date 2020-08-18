import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import * as serviceWorker from './serviceWorker';
import Accueil from './components/Accueil';
import Login from './components/Login';
import Nav from './components/Nav'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Route path = "/" exact component={Accueil}/>
      <Route path = "/Login" component={Login}/>
      <Route path = "/App" component={TodoList}/>
      <Route path = "/Contact" component={Contact}/>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
