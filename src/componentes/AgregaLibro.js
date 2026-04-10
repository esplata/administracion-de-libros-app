import React from "react";
import FormularioDeLibro from "./FormularioDeLibro";
import Header from "./Header";

// const tabla = require("../controller/db");
const libros = require("../controller/libros");

function AgregaLibro() {
  function handleOnSubmit(libro) {
    console.log(libro);

    console.log("Adesso dovresti scriverlo nel database Couch");
  }

  return (
    <>
      <Header />
      <React.Fragment>
        <FormularioDeLibro handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    </>
  );
}

export default AgregaLibro;
