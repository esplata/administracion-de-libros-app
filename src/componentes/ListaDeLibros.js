import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Table from "./Table";
const libros = require("../controller/libros");

export async function loader() {
  const response = await libros.getAll();
  const listaLibros = await response;
  return listaLibros;
}

export default function ListaDeLibros() {
  const listaLibri = useLoaderData();
  const [libro, setLibro] = useState(listaLibri);

  return (
    <>
      <Header />
      <h2>Lista de Libros</h2>
      <Table elencoLibri={libro} />
      <hr />
    </>
  );
}
