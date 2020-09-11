import React from 'react';

import imagem from '../assets/contato.jpg';
import Head from '../components/Head';

import './Contato.css';

function Contato() {
  return (
    <section className="contato animeLeft">
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={imagem} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className="dados">
          <li>caique@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 123</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato;
