import React from 'react';

function Input({ type, label, id, value, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
