import React from 'react';

import { ProductsProvider } from './productsContext';
import { CartProvider } from './cartContext';

const AppProvider = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default AppProvider;
