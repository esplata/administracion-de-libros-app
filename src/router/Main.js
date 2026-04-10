import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function Main() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default Main;

/*
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<ListaDeLibros />} path="/" />
            <Route element={<AgregaLibro />} path="/add" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

*/
