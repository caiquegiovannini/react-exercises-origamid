import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Contato from './pages/Contato';
import Links from './components/Links';

import './Ex10.css';

function Ex10() {
  let { path, url } = useRouteMatch();

  return (
    <section className="ex10">
      <Links url={url} />

      <Switch>
        <Route path={`${path}`} exact component={Produtos} />
        <Route path={`${path}/produto/:id`} component={Produto} />
        <Route path={`${path}/contato`} component={Contato} />
      </Switch>
    </section>
  )
}

export default Ex10
