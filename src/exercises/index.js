import React from 'react';
import { Link } from 'react-router-dom';

const Exercises = () => {
  return (
    <ul>
      <li key="ex01">
        <Link to="/exercise01">Exercício 01 - JSX</Link>
      </li>

      <li key="ex02">
        <Link to="/exercise02">Exercício 02 - JSX Arrays</Link>
      </li>

      <li key="ex03">
        <Link to="/exercise03">Exercício 03 - Componentes</Link>
      </li>

      <li key="ex04">
        <Link to="/exercise04">Exercício 04 - useState</Link>
      </li>

      <li key="ex05">
        <Link to="/exercise05">Exercício 05 - useEffect</Link>
      </li>

      <li key="ex06">
        <Link to="/exercise06">Exercício 06 - useContext</Link>
      </li>

      <li key="ex07">
        <Link to="/exercise07">Exercício 07 - Input</Link>
      </li>

      <li key="ex08">
        <Link to="/exercise08">Exercício 08 - Checkbox</Link>
      </li>

      <li key="ex09">
        <Link to="/exercise09">Exercício 09 - Formulário</Link>
      </li>

      <li key="slide">
        <Link to="/slide">Slide</Link>
      </li>
    </ul>
  );
};

export default Exercises;
