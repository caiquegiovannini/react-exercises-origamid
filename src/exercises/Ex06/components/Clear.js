import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

function Clear() {
  const { limparDados } = useContext(GlobalContext);

  return <button onClick={limparDados}>Limpar</button>;
}

export default Clear;
