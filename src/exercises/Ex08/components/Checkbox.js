import React from 'react';

function Checkbox({ color, handleChange, handleChecked }) {
  return (
    <label style={{ textTransform: 'capitalize' }}>
      <input
        type="checkbox"
        value={color}
        checked={handleChecked(color)}
        onChange={handleChange}
      />
      {color}
    </label>
  );
}

export default Checkbox;
