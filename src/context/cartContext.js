import React, { createContext, useCallback, useState } from 'react';

import products from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartExtraData, setCartExtraData] = useState([]);

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

  const handleRemoveCartProducts = useCallback(
    id => {
      const productIndex = cartData.findIndex(item => item.id === id);
      const amount = cartData[productIndex].amount;

      if (amount === 1) {
        cartData.splice(productIndex, 1);
        setCartData([...cartData]);
        return;
      }

      cartData[productIndex].amount -= 1;
      setCartExtraData([...cartData]);
    },
    [cartData, setCartData, setCartExtraData],
  );

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddProductsToCart,
        handleRemoveCartProducts,
        cartExtraData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
