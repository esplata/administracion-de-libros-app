const db = require("./db");

// Aggiunta di un record
module.exports = {
  add(user) {
    return db.post(user);
  },

  // ritorna TUTTi i records
  getAll() {
    return db.allDocs({ include_docs: true });
  },

  //Ritorna un record
  findOne(qry) {
    // il valore qry deve essere un json.
    //es: {name: 'cesare frediani' }
    return db.get({ qry });
  },

  //Elimina un record
  deleteOne(qry) {
    // il valore qry deve essere un json.
    //es: {name: 'cesare frediani' }
    db.get({ qry })
      .then(function (result) {
        const doc = result.docs[0];
        return db.remove(doc._id, doc._rev);
      })
      .then(function (response) {
        return { answer: "deleted" };
      })
      .catch(function (err) {
        return err;
      });
  },
  //Aggiorna un record
  updateOne(qry) {
    // il valore qry deve essere un json.
    //es: {name: 'cesare frediani' }
    db.get({ qry })
      .then(function (result) {
        const doc = result.docs[0];
        return db.put(doc._id, doc._rev);
      })
      .then(function (response) {
        return { answer: "updated" };
      })
      .catch(function (err) {
        return err;
      });
  },
  //Compatta DB
  compact() {
    return db.compact();
  },
  //Info DB
  info() {
    return db.info();
  },
};

// //Aggiunta di un record
// async function add(user) {
//   try {
//     const result = await db.post(user);
//     const risultato = await result.json();
//     return risultato;
//   } catch (err) {
//     return err;
//   }
// }

// // ritorna TUTTi i records
// async function getAll() {
//   try {
//     const result = await db.allDocs({ include_docs: true });
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

// //Ritorna un record
// async function findOne(qry) {
//   // il valore qry deve essere un json.
//   //es: {name: 'cesare frediani' }
//   try {
//     const result = await db.get({ qry });
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

// //Elimina un record
// async function deleteOne(qry) {
//   // il valore qry deve essere un json.
//   //es: {name: 'cesare frediani' }
//   try {
//     let result = await findOne(qry);
//     console.log("Risultato Ricerca: ", result);
//     if (result.docs.length === 0) {
//       console.log("Documento non trovato");
//       return false;
//     }
//     const doc = result.docs[0];
//     result = await db.remove(doc._id, doc._rev);
//     return true;
//   } catch (err) {
//     return false;
//   }
// }
// //Aggiorna un record
// async function updateOne(qry) {
//   // il valore qry deve essere un json.
//   //es: {name: 'cesare frediani' }
//   try {
//     let result = await findOne(qry);
//     console.log("Risultato Ricerca: ", result);
//     if (result.docs.length === 0) {
//       console.log("Documento non trovato");
//       return false;
//     }
//     const doc = result.docs[0];
//     result = await db.put(doc._id, doc._rev);
//     return true;
//   } catch (err) {
//     return false;
//   }
// }
// //Compatta DB
// async function compact() {
//   try {
//     const result = await db.compact();
//     return result;
//   } catch (err) {
//     return err;
//   }
// }
// //Info DB
// async function info() {
//   try {
//     const result = await db.info();
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

// module.exports = { add, getAll, findOne, deleteOne, updateOne, compact, info };
