import React, { createContext, useCallback, useState } from 'react';

import products from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(products);

  return (
    <ProductsContext.Provider value={{ products: productsData }}>
      {children}
    </ProductsContext.Provider>
  );
};
