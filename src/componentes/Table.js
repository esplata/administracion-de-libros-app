import React from "react";

// Componente funzionale con funzione freccia
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Titolo Libro</th>
        <th>Autore</th>
        <th>Prezzo</th>
        <th>quantitá</th>
        <th>Data registro</th>
      </tr>
    </thead>
  );
};

// Componente funzionale con funzione
function TableBody(props) {
  const rows = props.elencoLibri.rows.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.doc.nombrelibro}</td>
        <td>{row.doc.autor}</td>
        <td>{row.doc.precio}</td>
        <td>{row.doc.cantidad}</td>
        <td>{row.doc.fecha}</td>
        {/*<button onClick={() => props.removePeople(index)}>Delete</button>*/}
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table({ elencoLibri, removePeople, title }) {
  return (
    <div>
      {/*{title}*/}
      <table>
        <TableHeader />
        <TableBody elencoLibri={elencoLibri} />
      </table>
    </div>
  );
}

export default Table;
