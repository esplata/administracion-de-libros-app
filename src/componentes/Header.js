import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Application de Administracion de Libros</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to="/lista" className="link" activeclassname="active">
              Lista de Libros
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="link" activeclassname="active">
              Agrega Libro
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="links"></div>
    </header>
  );
}

export default Header;

/*
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

*/
