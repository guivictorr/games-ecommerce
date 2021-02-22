import React, { createContext, useCallback, useEffect, useState } from 'react';

import products from '../data/products.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleProductsOrder = useCallback(
    orderBy => {
      switch (orderBy) {
        case 'alphabeticOrder':
          const alphabeticOrder = productsData.sort((a, b) => a.name > b.name);
          setSortedProducts(alphabeticOrder);
          break;
        case 'ascPrice':
          const ascPriceOrder = productsData.sort((a, b) => a.price > b.price);
          setSortedProducts(ascPriceOrder);
          break;
        case 'decPrice':
          const decPriceOrder = productsData.sort((a, b) => a.price < b.price);
          setSortedProducts(decPriceOrder);
          break;
        case 'ascScore':
          const ascScoreOrder = productsData.sort((a, b) => a.score > b.score);
          setSortedProducts(ascScoreOrder);
          break;
        case 'decScore':
          const decScoreOrder = productsData.sort((a, b) => a.score < b.score);
          setSortedProducts(decScoreOrder);
          break;
        default:
          setSortedProducts(alphabeticOrder);
      }
    },
    [productsData, setSortedProducts],
  );

  useEffect(() => {
    setProductsData(products);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        sortedProducts,
        products: productsData,
        handleProductsOrder,
        setSortedProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
