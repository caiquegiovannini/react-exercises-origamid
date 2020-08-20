import React from 'react';

import Menu from './components/Menu';
import Home from './pages/Home';
import Products from './pages/Products';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function Ex03() {
  const { pathname } = window.location;

  return (
    <section>
      <Menu />

      {pathname === '/exercise03/products' ? (
        <Products products={produtos} />
      ) : (
        <Home />
      )}
    </section>
  );
}

export default Ex03;
