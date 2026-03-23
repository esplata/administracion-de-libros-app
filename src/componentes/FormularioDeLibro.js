import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function FormularioDeLibro(props) {
  /*
   * definiamo lo stato come oggetto, utilizzando il hook useState
   * cosí immagazziniamo tutti i valori inseriti.
   *
   * dato che utilizzeremo FormularioDeLibro sia
   * per l'aggiunta, che per l'editazione
   * verifichiamo se i campi sono vuoti
   * con l'operatore ternario ? :
   */

  const [libro, setLibro] = useState({
    nombrelibro: props.libro ? props.libro.nombrelibro : "",
    autor: props.libro ? props.libro.autor : "",
    cantidad: props.libro ? props.libro.cantidad : "",
    precio: props.libro ? props.libro.precio : "",
    fecha: props.libro ? props.libro.fecha : "",
  });
  // aggiungiamo uso stato per visualzzare un messaggio di errore

  const [errorMsg, setErrorMsg] = useState("");
  const { nombrelibro, autor, precio, cantidad } = libro;

  function handleOnSubmit(event) {
    event.preventDefault();
    const valores = [nombrelibro, autor, precio, cantidad];
    let errorMsg = "";

    const todosLosCamposLlenos = valores.every((campo) => {
      const valor = `${campo}`.trim();
      return valor !== "" && valor !== "0";
    });

    if (todosLosCamposLlenos) {
      const libro = {
        id: uuidv4(),
        nombrelibro,
        autor,
        precio,
        cantidad,
        fecha: new Date(),
      };

      props.handleOnSubmit(libro);
    } else {
      errorMsg = "Por favor, rellene todos los campos.";
    }
    setErrorMsg(errorMsg);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "cantidad":
        if (value === "" || parseInt(value) === +value) {
          setLibro((libro) => ({
            ...libro,
            [name]: value,
          }));
        }
        break;
      case "precio":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setLibro((libro) => ({
            ...libro,
            [name]: value,
          }));
        }
        break;
      default:
        setLibro((libro) => ({
          ...libro,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nombrelibro"
            value={nombrelibro}
            placeholder="Ingrese el nombre del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="autor">
          <Form.Label>Autor del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Ingrese el nombre del autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="cantidad"
            value={cantidad}
            placeholder="Ingrese la cantidad disponible"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="precio"
            value={precio}
            placeholder="Ingrese el precio del libro"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default FormularioDeLibro;
