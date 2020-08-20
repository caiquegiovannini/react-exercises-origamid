import React from 'react';

function ProductItem({ product }) {
  const { nome, propriedades } = product;

  return (
    <div style={{ border: '1px solid black', marginBottom: '20px' }}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItem;
