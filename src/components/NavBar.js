import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <ul>
      <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/menu'>Our Menu</NavLink></li>
     <li><NavLink to='/about'>About us</NavLink></li>
     <li><NavLink to='/contact'>Contact</NavLink></li>
     </ul>
    </div>
  )
}

export default Navbar