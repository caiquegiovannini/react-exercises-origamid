import React from 'react';

import ProductItem from './components/ProductItem';

function Products({ products }) {
  return (
    <section>
      <h2>Produtos</h2>

      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </section>
  );
}

export default Products;
