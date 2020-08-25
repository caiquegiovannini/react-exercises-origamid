import React from 'react';
import { Link } from 'react-router-dom';

const Exercises = () => {
  return (
    <ul>
      <li key="ex01">
        <Link to="/exercise01">Exercício 01</Link>
      </li>

      <li key="ex02">
        <Link to="/exercise02">Exercício 02</Link>
      </li>

      <li key="ex03">
        <Link to="/exercise03">Exercício 03</Link>
      </li>

      <li key="ex04">
        <Link to="/exercise04">Exercício 04</Link>
      </li>

      <li key="ex05">
        <Link to="/exercise05">Exercício 05</Link>
      </li>

      <li key="ex06">
        <Link to="/exercise06">Exercício 06</Link>
      </li>
    </ul>
  );
};

export default Exercises;
