import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import Checkbox from './components/Checkbox';

const Ex08 = () => {
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <Checkbox
          key={cor}
          color={cor}
          handleChange={handleChange}
          handleChecked={handleChecked}
        />
      ))}

      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default Ex08;
