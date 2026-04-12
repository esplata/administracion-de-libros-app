import React, { useState } from "react";
import { Form, useNavigation, useSubmit } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function LibroForm() {
  // definiamo il oggetto libro
  const d = new Date();
  const initialLibro = {
    id: uuidv4(),
    nombrelibro: "",
    autor: "",
    precio: 0,
    cantidad: 0,
    fecha: 0,
  };
  //  const submit = useSubmit();
  const [statoLibro, setStatoLibro] = useState(initialLibro);

  let giorno, mese;

  if (d.getDate() < 10) {
    giorno = "0" + d.getDate().toString();
  } else {
    giorno = d.getDate().toString();
  }
  if (d.getMonth() < 10) {
    mese = "0" + d.getMonth().toString();
  } else {
    mese = d.getMonth().toString();
  }
  initialLibro.fecha = giorno + "/" + mese + "/" + d.getFullYear().toString();

  // TODO: Crea un gestore del saubmit, nel quale scrivi i valori nel database e ritorni alla pagina principale,
  // TODO: se tutto é andato bene, altrimenti ritorni il messaggio di errore...

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStatoLibro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { id, nombrelibro, autor, precio, cantidad, fecha } = statoLibro;

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "cantidad":
  //       if (value === "" || parseInt(value) === +value) {
  //         setStatoLibro((statoLibro) => ({
  //           ...statoLibro,
  //           [name]: value,
  //         }));
  //       }
  //       break;
  //     case "precio":
  //       if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
  //         setStatoLibro((statoLibro) => ({
  //           ...statoLibro,
  //           [name]: value,
  //         }));
  //       }
  //       break;
  //     default:
  //       setStatoLibro((prev) => ({
  //         ...prev,
  //         [name]: value,
  //       }));
  //   }
  // };

  return (
    <Form action="/add/submit" metod="post">
      <label htmlFor="nombrelibro">Nombre del libro:</label>
      <input
        type="text"
        id="nombrelibro"
        name="nombrelibro"
        value={nombrelibro}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="autor">Autor:</label>
      <input
        type="text"
        id="autor"
        name="autor"
        value={autor}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="precio">Precio:</label>
      <input
        type="number"
        id="precio"
        name="precio"
        value={precio}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="cantidad">Cantidad:</label>
      <input
        type="number"
        id="cantidad"
        name="cantidad"
        value={cantidad}
        onChange={handleInputChange}
      ></input>
      <label>Fecha : {fecha}</label>
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}
