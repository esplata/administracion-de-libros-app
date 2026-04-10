import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Principal from "../componentes/Principal";
import AgregaLibro from "../componentes/AgregaLibro";
import InsertLibro from "../componentes/InsertLibro";
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
    Component: InsertLibro,
  },
  {
    path: "/action",
    children: [
      {
        path: "submit",
        lazy: async () => {
          const [compModule, actionModule] = await Promise.all([
            import("../componentes/ActionSubmit"),
            import("../componentes/ScriviLibro"),
          ]);
          return {
            Component: compModule.default,
            action: actionModule.default,
          };
        },
      },
    ],
  },
]);

export default router;
