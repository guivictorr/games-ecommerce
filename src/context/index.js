import React from 'react';

import { ProductsProvider } from './productsContext';

const AppProvider = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default AppProvider;
