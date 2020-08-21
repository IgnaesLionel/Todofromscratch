import React from 'react';
import {Link} from 'react-router-dom'
import {FaHouseDamage} from "react-icons/fa"
import {IoMdLogIn} from "react-icons/io"
import { GrContact } from "react-icons/gr";
import { FcTodoList } from "react-icons/fc";

function Nav() {
  return (
    <React.Fragment>
      <ul className = "list-inline myNavBar" style={{ marginBottom: 0, display: 'flex'}}>

      <Link to ="/">
          <li className = "list-inline-item " style={{marginLeft: 10, marginBottom: 0, listStyle:'none'}}> <FaHouseDamage/> Accueil </li>
      </Link>

      <Link to ="/Login">
        <li className = "list-inline-item " style={{marginLeft: 10, listStyle:'none'}}> <IoMdLogIn/> Login </li>
      </Link>
      <Link to ="/App">
        <li className = "list-inline-item" style={{marginLeft: 10, listStyle:'none'}}> <FcTodoList/> Todo App </li>
      </Link>
      <Link to ="/Contact">
        <li className = "list-inline-item" style={{marginLeft: 10, listStyle:'none'}}> <GrContact/> Contact </li>
      </Link>
      </ul>
    </React.Fragment>

  );
}

export default Nav;
