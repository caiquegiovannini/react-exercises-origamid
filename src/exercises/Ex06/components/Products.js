import React, { useContext } from 'react';

import { GlobalContext } from '../GlobalContext';

function Products() {
  const { products } = useContext(GlobalContext);

  if (products === null) return null;

  return (
    <div>
      Produto:
      {products.map((product) => (
        <li key={product.id}>{product.nome}</li>
      ))}
    </div>
  );
}

export default Products;
