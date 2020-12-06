import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{ cartData }}>{children}</CartContext.Provider>
  );
};
