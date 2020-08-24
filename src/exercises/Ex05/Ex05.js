import React, { useState } from 'react';
import Produto from './components/Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function Ex05() {
  const [preferencia, setPreferencia] = useState(
    localStorage.getItem('produto') || null,
  );

  function handleClick(event) {
    const preferenciaNome = event.target.innerText;
    localStorage.setItem('produto', preferenciaNome);
    setPreferencia(preferenciaNome);
  }

  return (
    <section>
      <div className="buttons">
        <h1>Preferência: {preferencia}</h1>
        <button onClick={handleClick} style={{ marginRight: '1rem' }}>
          notebook
        </button>
        <button onClick={handleClick} style={{ marginRight: '1rem' }}>
          smartphone
        </button>
      </div>

      {preferencia && <Produto preferencia={preferencia} />}
    </section>
  );
}

export default Ex05;
