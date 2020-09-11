import React from 'react'
import { NavLink } from 'react-router-dom';

import './Links.css';

function Links({ url }) {
  return (
    <nav>
      <NavLink
        activeClassName="active"
        className="link"
        to={`${url}`}
      >
        Produtos
      </NavLink>

      <NavLink
        activeClassName="active"
        className="link"
        to={`${url}/contato`}
      >
        Contato
      </NavLink>
    </nav>
  )
}

export default Links
