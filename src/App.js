import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import items from './assets/data';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import * as deepcopy from 'deepcopy';

function App() {
  const [cartItems, setCartItems] = useState(deepcopy(items));
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClearCart = () => {
    setCartItems(deepcopy(items));
  }

  const handleAddProduct = (index) => {
    setCartItems(prevState => {
      const newCart = prevState;
      newCart[index].quantity = newCart[index].quantity ? (newCart[index].quantity + 1) : 1;
      return newCart;
    })
  }

  const handleRemoveProduct = (index) => {
    setCartItems(prevState => {
      const newCart = prevState;
      newCart[index].quantity = 0;
      return newCart;
    })
  }

  useEffect(() => {
    const newTotalPrice = cartItems.filter(item => item.quantity).reduce((item) => item.quantity * item.price, 0)
    setTotalPrice(newTotalPrice)
  }, [cartItems])

  return (
    <main className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/cart'>
          <Cart
            cartItems={cartItems}
            handleClearCart={handleClearCart}
            totalPrice={totalPrice}
          />
        </Route>
        <Route path='/*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </main>

  );
}

export default App;
