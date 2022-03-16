import AddToCartButton from './AddToCartButton';

const MenuItems = ({ cartItems, handleAddProduct, handleRemoveProduct, selectedCategory }) => {
  console.log(cartItems);

  return (
    <section className='section-center'>
      {cartItems.filter(menuItem => {
        if (selectedCategory === "all") return true;
        return menuItem.category === selectedCategory
      }).map((menuItem, index) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}€</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
            <AddToCartButton
              index={index}
              handleAddProduct={handleAddProduct}
            />
          </article>
        );
      })}
    </section>
  );
};

export default MenuItems