import React from 'react';
import { ProductsProvider } from './context/productsContext';
import Routes from './routes';

const Main = () => {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
};

export default Main;
