import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Principal from "../componentes/Principal";
import AgregaLibro from "../componentes/AgregaLibro";
import ListaDeLibros from "../componentes/ListaDeLibros";
import ErrorPage from "../componentes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Principal,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lista",
    Component: ListaDeLibros,
  },
  {
    path: "/add",
    Component: AgregaLibro,
  },
]);

export default router;
