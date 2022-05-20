import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Header>
      <h1>Biblioteca de Decks da gurizada</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Deck's Cadastrados
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Cadastrar Deck
        </NavLink>
      </div>
    </Header>
  );
};

export default Header;
