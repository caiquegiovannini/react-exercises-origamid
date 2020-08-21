import React, { useState } from 'react';

import Button from './components/Button/Button';
import Product from './components/Product/Product';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function Ex04() {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    setLoading(true);
    const productName = event.target.innerText;
    const response = await fetch(`${url}${productName}`);
    const data = await response.json();

    setProduct(data);
    setLoading(false);
  };

  return (
    <section>
      <div className="buttons">
        <Button title="notebook" click={handleClick} />
        <Button title="smartphone" click={handleClick} />
        <Button title="tablet" click={handleClick} />
      </div>

      {loading && 'Carregando...'}
      {!loading && product && <Product product={product} />}
    </section>
  );
}

export default Ex04;
