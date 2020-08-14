import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.css';

function Nav() {
  const navstyle = {
    color : "white"
  };
  return (
    <nav className={classes}>
     <h1>Nav bar</h1>
     <ul class='nav_links'>
        <Link style = {navstyle} to = "/about"> <li>About</li> </Link>
        <Link style = {navstyle} to = "/shop"> <li>Shop</li> </Link>
     </ul>
    </nav>
  );
}

export default Nav;