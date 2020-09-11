import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './Card.css';

function Card({ produto }) {
  let { url } = useRouteMatch();
  const { id, fotos, nome } = produto;

  return (
    <Link to={`${url}/produto/${id}`} className="card">
      <img src={fotos[0].src} alt={nome} />
      <h1 className="nome">{nome}</h1>
    </Link>
  );
}

export default Card;
