import React from 'react'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cart = ({ cartItems, handleClearCart, totalPrice }) => {
  return (
    <>
      <NavBar />
      <Wrapper>
        {cartItems.filter(item => item.quantity).map((item) => (
          <div key={item.id} className="test">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="cart-item">
              <h4>{item.title}</h4>
              <h4>{item.quantity}</h4>
              <h4>{item.price}€</h4>
            </div>
          </div>
        ))}
        <div className='link-container'>
          <h3>Total price: {totalPrice}€</h3></div>
        <div className='link-container'>
          <Link to='/menu' className='link-btn'>
            order more
          </Link>
          {cartItems.length >= 1 && (
            <button className='btn' onClick={handleClearCart}>clear cart</button>
          )}
          {cartItems.length === 0 && <h2>Your order is empty</h2>}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 25rem;
  .cart-item{
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0rem;
  }
  .amount{
    font-size:1.3rem;
  }
  .button-amount {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-container {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: uppercase;
    padding 0.8rem 1rem;
    background: #03c03c;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-weight: bold;
    cursor: pointer;
  }
  .link-btn:hover{
    color: #0b1015;
    background: #ffc500;
  }
  .btn{
    font-size:17px;
  }
  @media screen and (min-width: 800px){
   .test{
     display: flex;
     justify-content: flex-end;
     flex-direction: row;
     
     align-items: center;
     padding: 1rem;
  }
  .cart-item h4{
    padding: 4rem;
  }
`
export default Cart