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
    </ul>
  );
};

export default Exercises;
