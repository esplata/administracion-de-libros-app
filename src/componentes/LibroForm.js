import genDate from "../utils/genDate";
import React, { useState, navigate } from "react";
import { Form, redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const libros = require("../controller/libros");

export default function LibroForm() {
  // Define te Libro OBJECT
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
    /* This function writes phisically the record
     * in the database, if its exists.
     */
    let valueBack;
    /* We define a new object
     * tabella
     * this object will contain tha "name" of the table
     * seen that in couchDB we don't have
     * "collections" like in mongoDB
     * or "tables" like in SQL
     */

    const tabella = { type: "books" };
    // We add the new object to the recived
    // to be write record..

    data = { ...data, ...tabella };

    try {
      const result = await libros.add(data);
      valueBack = await result;
      if (valueBack.ok) {
        valueBack = true;
      }
    } catch (error) {
      valueBack = error;
    }
    return valueBack;
  }

  function onSubmitAction(e) {
    let risultato;
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = Object.fromEntries(formData);
    try {
      risultato = scriviDati(formValue);
      if (!risultato) {
        return redirect("/error?errMsg=" + risultato.message);
      }
    } catch (e) {
      return redirect("/error?errMsg=" + e.message);
    }
    setStatoLibro(initialLibro);
    redirect("/");
    //    navigate("/");
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setStatoLibro((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "cantidad":
        if (value === "" || parseInt(value) === +value) {
          setStatoLibro((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        break;
      case "precio":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setStatoLibro((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
        break;
      default:
        setStatoLibro((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
  };

  const { id, nombrelibro, autor, precio, cantidad, fecha } = statoLibro;

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
