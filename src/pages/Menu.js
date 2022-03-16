import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import MenuItems from '../components/MenuItems';
import MenuCategories from '../components/MenuCategories';
import items from '../assets/data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))]; 
console.log(allCategories);

function Menu({ handleAddProduct, handleRemoveProduct, cartItems, setCartItems }) {
  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main>
      <NavBar />
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <MenuCategories
          setSelectedCategory={setSelectedCategory}
          categories={allCategories}
        />
        <MenuItems
          cartItems={cartItems}
          handleRemoveProduct={handleRemoveProduct}
          handleAddProduct={handleAddProduct}
          selectedCategory={selectedCategory}
        />
      </section>
      <NewsLetter />
    </main>
  );
}

export default Menu