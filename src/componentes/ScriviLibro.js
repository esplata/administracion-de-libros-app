const libros = require("../controller/libros");

async function ScriviLibro({ params, request }) {
  const formData = await request.formData();

  try {
    //const response = await libros.add(formData);
    return { success: true };
  } catch (err) {
    console.log(err);
  }
}

export default ScriviLibro;
