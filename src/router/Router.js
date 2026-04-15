import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Principal from "../componentes/Principal";
import InsertLibro from "../componentes/InsertLibro";
import ListaDeLibros, {
  loader as librosLoader,
} from "../componentes/ListaDeLibros";
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
    loader: librosLoader,
  },
  {
    path: "/add",
    Component: InsertLibro,
  },
  {
    path: "/error",
    Component: ErrorPage,
  },
]);

export default router;
