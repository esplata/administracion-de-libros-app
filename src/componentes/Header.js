import React from "react";
import { NavLink } from "react-router-dom";
import "../css/base.css";

function Header() {
  return (
    <header>
      <title>Administracion de Libros</title>
      <h1>Application de Administracion de Libros</h1>
      <hr />
      <nav className="barranavigazione">
        <ul className="horizontal-menu">
          <li>
            <NavLink to="/" className="link" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="link" activeclassname="active">
              Agrega Libro
            </NavLink>
          </li>
          <li>
            <NavLink to="/lista" className="link" activeclassname="active">
              Lista de Libros
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="links"></div>
    </header>
  );
}

export default Header;
