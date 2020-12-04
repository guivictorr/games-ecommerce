import React from 'react';
import { ProductsProvider } from './context/productsContext';
import Home from './pages/Home';

const Main = () => {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  );
};

export default Main;
