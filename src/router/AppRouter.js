import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../componentes/Header";
import AgregaLibro from "../componentes/AgregaLibro";
import ListaDeLibros from "../componentes/ListaDeLibros";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="mani-content">
          <Routes>
            <Route element={<ListaDeLibros />} path="/" />
            <Route element={<AgregaLibro />} path="/add" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
