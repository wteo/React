import React, { useState } from 'react';

import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

function App() {

  const products = [{
    title       : 'BEC + BRIDGE',
    description : 'Australian design duo Bec + Bridge explore a sense of sartorial wanderlust in their Autumn 20 Sojourn collection. The Raphaela Mini Dress is crafted from heavy stretch crepe that conforms flawlessly to your figure, creating a pared-back yet confident update on the perennial LBD.',
    price       : 120.00,
    imageLink   : '../images/dress.jpg'
  }, {
    title       : 'Sleepwear',
    description : 'Getting a full 8-hours can feel near-impossible. From comfort to warmth, what you wear in bed is essential for improving your quality of sleep. With a silky fabric and elegant, airy fit, our sleepwear gives you space to breathe. Our superior comfort puts you on the right track for incredible sleep. Emphasizing your shape in all the right places, with our sleepwear, you don’t have to sacrifice style for comfort – to us, it’s the same thing.',
    price       : 35.99,
    imageLink   : '../images/sleepwear.jpg'
  }, {
    title       : 'Men’s Shirts',
    description : 'Designed for the jet-setter in mind, our shirt is the ideal blend of comfort and style. Built for the man who’s in demand, this classic design will keep you looking presentable on the go, with a gentle fabric for all-day comfort. Because you won’t perform at your best if you’re irritated by your clothing. Our shirt is a sleek take on a well-loved classic featuring a tried-and-tested spread collar and a slim fit styling.',
    price       : 45.60,
    imageLink   : '../images/shirt.jpg'
  }]

  const [enteredItem, setEnteredItem] = useState([]);

  const addItemHandler = item => {
    setEnteredItem(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.push({
          title       : item.title, 
          description : item.description, 
          price       : item.price,
          id          : Math.random().toString()
      });
      return updatedItems;
    })
  }
  
  const removeItemHandler = (itemId) => {
    setEnteredItem(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== itemId)
      return updatedItems;
    });
  };

  return (
    <div className={styles.background}>
      <Products 
        data={products} 
        onAddItem={addItemHandler} 
      />
      <Cart 
        item={enteredItem} 
        onRemoveItem={removeItemHandler} 
      />
    </div>
  );

}

export default App;
