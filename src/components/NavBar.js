import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import NavBarButtons from './NavBarButtons';

const Navbar = ({loadedCartItems}) => {
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
    <NavContainer>
      <div className='main-nav'>
        <div className='nav-header'>
          <NavLinkLogo to='/' className='logo'>Pizzeria grande</NavLinkLogo>
          <button className='nav-toggle' onClick={toggleLinks}>< FaBars /></button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li onClick={loadedCartItems}><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
           <li><NavLink to='/cart'>Cart</NavLink></li>  
          </ul>
        </div>
         <NavBarButtons/> 
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
.main-nav{
  background: rgba(11,16,21,0.8);
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.nav-toggle {
  font-size: 2rem;
  color: white;
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
}
.nav-toggle:hover {
  color: white;
  transform: rotate(90deg);
}
.links a {
  font-size: 19px;
  text-transform: capitalize;
  letter-spacing: .1rem;
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.3s linear;
  color: white;
  font-weight: bold;
}
.links a:hover {
  color: white;
  padding-left: 1.5rem;
}
.links a:visited{
  list-style: none;
}
.links-container {
  height: 1;
  overflow: hidden;
  transition: all 0.3s linear;
}
.show-container {
  height: 10rem;
}
.cart-btn-wrapper {
  display: none;
}
  @media screen and (min-width: 900px) {
    .main-nav {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
      justify-content: center;
      text-align: center;
      list-style: none;
    }
    .links a {
      padding: 0.5rem;
      margin: 0 0.5rem;
      text-decoration: none;
      font-size: 25px
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .cart-btn-wrapper {
      display: flex;
      align-items: stretch;
      justify-items: start;
    }
  }
`
const NavLinkLogo = styled(NavLink)`
display: flex;
align-items: center;
text-decoration: none;
text-transform: capitalize;

font-family: 'Playball', cursive;
font-size: 1.8rem;
color: white;
 
@media screen and (min-width: 450px){
  font-size: 2.3rem;
}
@media screen and (min-width: 1000px){
  font-size: 2.8rem;
}
`

export default Navbar