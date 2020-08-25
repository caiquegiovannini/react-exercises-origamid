import React, { createContext, useState, useEffect, memo } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const limparDados = () => {
    setProducts(null);
  };

  return (
    <GlobalContext.Provider value={{ products, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
