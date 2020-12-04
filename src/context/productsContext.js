import React, { createContext, useCallback, useState } from 'react';

import products from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);

  const handleProductsOrder = useCallback(
    orderBy => {
      switch (orderBy) {
        case 'ascPrice':
          productsData.sort((a, b) => a.price < b.price);
          break;
      }
    },
    [productsData],
  );

  return (
    <ProductsContext.Provider value={{ products: productsData }}>
      {children}
    </ProductsContext.Provider>
  );
};
