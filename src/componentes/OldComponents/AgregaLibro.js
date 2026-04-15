import React from "react";
import FormularioDeLibro from "../FormularioDeLibro";
import Header from "../Header";

const libros = require("../../controller/libros");

function AgregaLibro() {
  function handleOnSubmit(libro) {}

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
