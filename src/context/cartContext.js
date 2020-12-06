import React, { createContext, useCallback, useEffect, useState } from 'react';

import products from '../data/products.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartExtraData, setCartExtraData] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartShipValue, setCartShipValue] = useState(0);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  const handleAddProductsToCart = useCallback(
    id => {
      const newProduct = products.find(item => item.id === id);
      const verifyProduct = cartData.find(item => newProduct.id === item.id);

      if (verifyProduct) {
        verifyProduct.amount++;
        handleCartSubTotal();
        handleCartShipValue();
        return;
      }

      newProduct.amount = 1;
      setCartData([...cartData, newProduct]);
      handleCartSubTotal();
      handleCartShipValue();
    },
    [setCartData, products, cartData, handleCartSubTotal, handleCartShipValue],
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
      handleCartShipValue();
    },
    [
      cartData,
      setCartData,
      setCartExtraData,
      handleCartSubTotal,
      handleCartShipValue,
    ],
  );

  const handleCartSubTotal = useCallback(() => {
    let subTotal = 0;

    cartData.map(product => {
      subTotal += product.amount * product.price;
    });

    setCartSubTotal(subTotal.toFixed(2));
  }, [cartData, setCartSubTotal]);

  const handleCartShipValue = useCallback(() => {
    let amount = 0;
    let shipValue = 0;

    cartData.map(product => {
      amount += product.amount;
    });

    if (cartSubTotal > 250) {
      setCartShipValue(shipValue.toFixed(2));
      return;
    }

    shipValue = amount * 10;
    setCartShipValue(shipValue.toFixed(2));
  }, [cartData, setCartShipValue, cartSubTotal]);

  useEffect(() => {
    handleCartSubTotal();
    handleCartShipValue();
    setCartTotalValue(+cartSubTotal + +cartShipValue);
  }, [cartData, handleCartShipValue, handleCartSubTotal, cartShipValue]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddProductsToCart,
        handleRemoveCartProducts,
        cartExtraData,
        cartSubTotal,
        cartShipValue,
        cartTotalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
