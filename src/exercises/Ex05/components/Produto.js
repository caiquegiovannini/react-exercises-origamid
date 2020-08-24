import React, { useState, useEffect } from 'react';

function Produto({ preferencia }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [preferencia]);

  return (
    <section>
      {product && (
        <div className="main">
          <h1>{product.nome}</h1>
          <p>R$ {product.preco}</p>
        </div>
      )}
    </section>
  );
}

export default Produto;
