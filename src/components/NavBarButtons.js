import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';

export const NavBarButtons = () => {
  return <Wrapper className='cart-btn-wrapper'>
    <Link to="/cart" className='cart-btn'>
      <span className='cart-container'>
        <FaShoppingCart />
        <span className='cart-value'>0</span>
      </span>
    </Link>
    <button type="button" className="auth-btn"><FaUserPlus /></button>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.5rem;
  .cart-btn {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: #03c03c;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    letter-spacing: 0.1rem;
  }
  @media screen and (min-width: 850px){
    .cart-container{
      font-size:1.7rem;
    }
    .auth-btn{
      font-size:1.7rem;
    }
  }
`

export default NavBarButtons;