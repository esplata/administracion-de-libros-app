import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Principal from "../componentes/Principal";
//import AgregaLibro from "../componentes/AgregaLibro";
import InsertLibro from "../componentes/InsertLibro";
import ListaDeLibros, {
  loader as librosLoader,
} from "../componentes/ListaDeLibros";
import ErrorPage from "../componentes/ErrorPage";
//import FormTest from "../componentes/FormTest";

async function actionSubmit({ params, request }) {
  try {
    const formData = await request.formData();
    const num = formData.num;
    console.log("dati ricevuti:", num);
  } catch (e) {
    console.log("errore:", e);
  }

  //const { id, nombrelibro, autor, precio, cantidad, fecha } = formData;
}

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
]);

export default router;
