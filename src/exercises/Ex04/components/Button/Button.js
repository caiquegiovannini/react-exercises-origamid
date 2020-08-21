import React from 'react';

function Button({ title, click }) {
  return (
    <button type="button" style={{ margin: '0 1rem' }} onClick={click}>
      {title}
    </button>
  );
}

export default Button;
