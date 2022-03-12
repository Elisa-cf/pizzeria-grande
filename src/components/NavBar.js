import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='main-nav'>
        <div className='nav-header'>
          <NavLinkLogo to='/' className='logo'>Pizzeria GRANDE</NavLinkLogo>
      <button className='nav-toggle' onClick={toggleLinks}>< FaBars /></button>
        </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/about'>About us</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
     </ul>
      </div>
      </div>
    </nav>
  )
}


const NavLinkLogo = styled(NavLink)`
text-decoration: none;
height: 40px;
font-family: 'Playball', cursive;
text-decoration: none; 
font-size: 1.8rem;
color: white;

@media screen and (min-width: 450px){
font-size: 2.3rem;
}

 @media screen and (min-width: 800px){
font-size: 2.8rem;
}
`


export default Navbar