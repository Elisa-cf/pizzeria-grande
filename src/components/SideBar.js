import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useContext } from 'react'
import AppContext from '../context/context';
import NavBarButtons from './NavBarButtons';

const Sidebar = () => {
 const { isSidebarOpen, closeSidebar } = useContext(AppContext);

 return (
  <SidebarContainer isSidebarOpen={isSidebarOpen}>
   <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
    <div className="sidebar-header">
     <NavLinkLogo to='/' className='logo'>Pizzeria grande</NavLinkLogo>
     <button className='close-btn' type="button" onClick={closeSidebar}>
      <FaTimes />
     </button>
    </div>
    <ul className="links">
     <li><NavLink to='/' onClick={closeSidebar}>Home</NavLink></li>
     <li><NavLink to='/menu' onClick={closeSidebar}>Menu</NavLink></li>
     <li><NavLink to='/about' onClick={closeSidebar}>About</NavLink></li>
     <li><NavLink to='/contact' onClick={closeSidebar}>Contact</NavLink></li>
    </ul>
    <NavBarButtons />
   </aside></SidebarContainer>
 )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #ffc500;
    transition: all 0.3s linear;
    cursor: pointer;
    color: white;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: red;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: green;
    transition: all 0.3s linear;
    letter-spacing: 1px;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: orange;
    color: white;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: yellow;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar