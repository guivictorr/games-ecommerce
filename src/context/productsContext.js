import React, { createContext, useState } from 'react';

import products from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);

  const handleProductsOrder = callback => {
    const sortedProducts = productsData.sort(callback);
    setProductsData([...sortedProducts]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products: productsData,
        handleProductsOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
