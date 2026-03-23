const testdb = require("./init_couch");

function add(user) {
  return testdb.insert(user);
  return inserted;
}

function getAll() {
  return testdb.list();
}

let user = {
  email: "cfrediani@example.com",
  name: "Cesare Frediani",
  address: "quello di sempre, 1",
};

async function a(user) {
  const conferma = await add(user);
  return conferma.json();
}

a();

// // Create a document
// app.post("/documents", async (req, res) => {
//   try {
//     const body = req.body;
//     const response = await db.insert(body);
//     res.status(201).send(response);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // Read a document
// app.get("/documents/:id", async (req, res) => {
//   try {
//     const document = await db.get(req.params.id);
//     res.status(200).send(document);
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
// // Update a document
// app.put("/documents/:id", async (req, res) => {
//   try {
//     const document = await db.get(req.params.id);
//     const updatedDocument = { ...document, ...req.body };
//     const response = await db.insert(updatedDocument);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // Delete a document
// app.delete("/documents/:id", async (req, res) => {
//   try {
//     const document = await db.get(req.params.id);
//     await db.destroy(document._id, document._rev);
//     res.status(204).send();
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
