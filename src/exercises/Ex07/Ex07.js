import React, { useState } from 'react';

import Input from './components/Input';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const fields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numer',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

function Ex07() {
  const fieldsParsed = fields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    };
  }, {});
  const [formFields, setFormFields] = useState(fieldsParsed);
  const [message, setMessage] = useState(null);

  function handleChange(event) {
    const { id, value } = event.target;

    setFormFields({
      ...formFields,
      [id]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = formFields;
    // const values = Object.values(formFields);

    // for (let value of values) {
    //   if (value === '') {
    //     return setMessage('Todos os campos devem ser preenchidos!');
    //   }
    // }

    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );

    if (response.ok) {
      return setMessage('Formulário enviado com sucesso!');
    } else {
      return setMessage('Falha ao enviar o formulário!');
    }
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map(({ id, label, type }) => (
          <Input
            key={id}
            type={type}
            label={label}
            id={id}
            value={formFields[id]}
            handleChange={handleChange}
          />
        ))}

        {message && <p>{message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Ex07;
