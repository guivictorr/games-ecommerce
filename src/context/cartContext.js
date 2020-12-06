import React, { createContext, useCallback, useEffect, useState } from 'react';

import products from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartExtraData, setCartExtraData] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState('');
  const [cartShipValue, setCartShipValue] = useState('');

  const handleAddProductsToCart = useCallback(
    id => {
      const newProduct = products.find(item => item.id === id);
      const verifyProduct = cartData.find(item => newProduct.id === item.id);

      if (verifyProduct) {
        verifyProduct.amount++;
        handleCartSubTotal();
        return;
      }

      newProduct.amount = 1;
      setCartData([...cartData, newProduct]);
      handleCartSubTotal();
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
      handleCartSubTotal();
    },
    [cartData, setCartData, setCartExtraData],
  );

  const handleCartSubTotal = useCallback(() => {
    let subTotal = 0;

    cartData.map(item => {
      subTotal += item.amount * item.price;
    });

    setCartSubTotal(subTotal.toFixed(2));
  }, [cartData, setCartSubTotal]);

  useEffect(() => {
    handleCartSubTotal();
  }, [cartData, cartExtraData]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddProductsToCart,
        handleRemoveCartProducts,
        cartExtraData,
        cartSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
