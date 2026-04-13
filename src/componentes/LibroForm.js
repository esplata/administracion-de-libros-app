import genDate from "../utils/genDate";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const libros = require("../controller/libros");

export default function LibroForm() {
  // definiamo il oggetto libro
  const initialLibro = {
    id: uuidv4(),
    nombrelibro: "",
    autor: "",
    precio: 0,
    cantidad: 0,
    fecha: 0,
  };
  const [statoLibro, setStatoLibro] = useState(initialLibro);

  initialLibro.fecha = genDate();

  async function scriviDati(data) {
    //TODO: Devi aggiungere un campo: il campo che definisce la "tabella" --> "type": "libri".
    let ritorno;

    try {
      const result = await libros.add(data);
      ritorno = await result;
      if (ritorno.ok) {
        ritorno = true;
      }
    } catch (error) {
      ritorno = error;
    }
    return ritorno;
  }

  function onSubmitAction(e) {
    let risultato;
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData);
    console.log(formValue);
    try {
      risultato = scriviDati(formValue);
    } catch (e) {
      risultato = e;
    }
    console.log("il valore di ritorno riportato é: ", risultato);
    setStatoLibro(initialLibro);
  }

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
    <Form onSubmit={onSubmitAction}>
      <div>
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          name="id"
          defaultValue={id}
          disabled={true}
          readOnly={true}
        ></input>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="text"
          id="fecha"
          name="fecha"
          defaultValue={fecha}
          readOnly={true}
        ></input>
      </div>
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}
