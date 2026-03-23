const testdb = require("./db");

async function add(user) {
  try {
    const result = await testdb.insert(user);
    return result;
  } catch (err) {
    return err;
  }
}

async function getAll() {
  try {
    const result = await testdb.list();
    return result;
  } catch (err) {
    return err;
  }
}

async function findOne(qry) {
  // il valore qry deve essere un json.
  //es: {name: 'cesare frediani' }
  try {
    const result = await testdb.find({
      selector: qry,
      limit: 1,
    });
    return result;
  } catch (err) {
    return err;
  }
}

async function deleteOne(qry) {
  // il valore qry deve essere un json.
  //es: {name: 'cesare frediani' }
  try {
    let result = await findOne(qry);
    console.log("Risultato Ricerca: ", result);
    if (result.docs.length === 0) {
      console.log("Documento non trovato");
      return false;
    }
    const doc = result.docs[0];
    result = await testdb.destroy(doc._id, doc._rev);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = { add, getAll, findOne, deleteOne };

// let user = {
//   email: "cfrediani@example.com",
//   name: "Cesare Frediani",
//   address: "quello di sempre, 1",
// };
// let user = { name: "Cesare Frediani" };

// const conferma = deleteOne(user);
// console.log(conferma);
