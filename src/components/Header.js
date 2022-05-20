import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Registro de deck's da gurizada</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Decks Cadastrados
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar Deck
        </NavLink>
      </div>
    </header>
  );
};

export default Header;