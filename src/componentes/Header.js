import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Application de Administracion de Libros</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeclassname="active">
          Lista de Libros
        </NavLink>
        <NavLink to="/add" className="link" activeclassname="active">
          Agrega Libro
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
