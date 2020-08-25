import React from 'react';
import { GlobalStorage } from './GlobalContext';

import Products from './components/Products';
import Clear from './components/Clear';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

function Ex06() {
  return (
    <GlobalStorage>
      <Products />
      <Clear />
    </GlobalStorage>
  );
}

export default Ex06;
