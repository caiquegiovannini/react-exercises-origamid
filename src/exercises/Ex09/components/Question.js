import React from 'react';

function Question({ id, question, options, value, active, handleChange }) {
  if (!active) return null;

  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{question}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            id={id}
            type="radio"
            value={option}
            checked={value === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Question;
