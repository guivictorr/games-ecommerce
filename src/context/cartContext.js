import React, { createContext, useEffect, useState } from 'react';

import products from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartValues, setCartValues] = useState({
    cartShipValue: 0,
    cartTotalValue: 0,
    cartSubTotalValue: 0,
  });

  const handleSubTotalValue = () => {
    let subTotal = 0;

    cartData.map(product => {
      subTotal += product.amount * product.price;
    });

    return subTotal;
  };

  const handleCartValues = () => {
    const subTotal = handleSubTotalValue();
    const shipValue = subTotal > 250 ? 0 : cartLength * 10;
    const cartTotal = shipValue + subTotal;

    const newValues = {
      cartShipValue: shipValue.toFixed(2),
      cartSubTotalValue: subTotal.toFixed(2),
      cartTotalValue: cartTotal.toFixed(2),
    };

    setCartValues(newValues);
  };

  const handleCartLength = () => {
    let length = 0;

    cartData.map(product => {
      length += product.amount;
    });

    setCartLength(length);
  };

  const handleAddProductsToCart = id => {
    const newProduct = products.find(item => item.id === id);
    const verifyProduct = cartData.find(item => newProduct.id === item.id);

    if (verifyProduct) {
      verifyProduct.amount += 1;
      handleCartLength();
      return;
    }

    newProduct.amount = 1;
    setCartData([...cartData, newProduct]);
  };

  const handleRemoveCartProducts = id => {
    const productIndex = cartData.findIndex(item => item.id === id);
    const product = cartData[productIndex];

    if (product.amount > 1) {
      product.amount -= 1;
      setCartData([...cartData]);
      return;
    }

    cartData.splice(productIndex, 1);
    setCartData([...cartData]);
  };

  useEffect(() => {
    handleCartLength();
    handleCartValues();
  }, [cartData]);

  useEffect(() => {
    handleCartValues();
  }, [cartLength]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        cartValues,
        cartLength,
        handleAddProductsToCart,
        handleRemoveCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
