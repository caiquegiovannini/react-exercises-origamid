import React, { useState } from 'react';
import Question from './components/Question';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function Ex09() {
  const questionsIds = perguntas.reduce((acc, pergunta) => {
    return {
      ...acc,
      [pergunta.id]: '',
    };
  }, {});

  const [answers, setAnswers] = useState(questionsIds);
  const [slide, setSlide] = useState(0);
  const [result, setResult] = useState('');

  function handleChange(event) {
    const answer = event.target.value;
    const answerId = event.target.id;
    setAnswers({ ...answers, [answerId]: answer });
  }

  function calculateResult() {
    const rightAnswers = perguntas.filter(
      ({ id, resposta }) => answers[id] === resposta,
    );

    setResult(`Você acertou ${rightAnswers.length} de ${perguntas.length}`);
  }

  function handleNext() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      calculateResult();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map(({ id, pergunta, options, resposta }, index) => (
        <Question
          key={id}
          id={id}
          active={slide === index}
          question={pergunta}
          options={options}
          answer={resposta}
          value={answers[id]}
          handleChange={handleChange}
        />
      ))}

      {result ? (
        <p>{result}</p>
      ) : (
        <button type="submit" onClick={handleNext}>
          Próxima
        </button>
      )}
    </form>
  );
}

export default Ex09;
