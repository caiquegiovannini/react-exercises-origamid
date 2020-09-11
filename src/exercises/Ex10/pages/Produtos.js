import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Head from '../components/Head';

import './Produtos.css';

function Produtos({ url }) {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(results => results.json())
      .then(data => setProdutos(data));
  }, []);

  if (!produtos) return null;
  return (
    <section className="produtos animeLeft">
      <Head title="Ranek" description="Este é o site Ranek" />
      {produtos && produtos.map(produto => (
        <Card key={produto.id} produto={produto} />
      ))}
    </section>
  )
}

export default Produtos;
