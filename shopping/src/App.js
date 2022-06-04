import React, { useState } from 'react';

import Products from './Products/Products';
import Cart from './Cart/Cart';

function App() {

  const products = [{
    title       : 'Dress',
    description : 'White floral dress',
    price       : 15.00
  }, {
    title       : 'Shirt',
    description : 'Red short-sleeved shirt',
    price       : 5.00
  }, {
    title       : 'Pants',
    description : 'Dark blue denim pants',
    price       : 45.00
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
    <React.Fragment>
      <Products 
        data={products} 
        onAddItem={addItemHandler} 
      />
      <Cart 
        item={enteredItem} 
        onRemoveItem={removeItemHandler} 
      />
    </React.Fragment>
  );

}

export default App;
