import React, { createContext, useCallback, useState } from 'react';

import products from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const handleAddProductsToCart = useCallback(
    id => {
      const newProduct = products.find(item => item.id === id);
      const verifyProduct = cartData.find(item => newProduct.id === item.id);

      if (verifyProduct) {
        verifyProduct.amount++;
        return;
      }

      newProduct.amount = 1;
      setCartData([...cartData, newProduct]);
    },
    [setCartData, products, cartData],
  );

  return (
    <CartContext.Provider value={{ cartData, handleAddProductsToCart }}>
      {children}
    </CartContext.Provider>
  );
};
