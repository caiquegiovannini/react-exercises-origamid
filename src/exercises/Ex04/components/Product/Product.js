import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h1>{product.nome}</h1>
      <p>R$ {product.preco}</p>
      <img src={product.fotos[0].src} alt={product.fotos.titulo} />
    </div>
  );
}

export default Product;
