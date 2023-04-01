import * as mysql from "mysql";

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gestao_escolar'
});

const db = {
  connect: () => {
    connection.connect((error) => {
      if (error) return console.error(error);
      console.log("Connected....!!");
    });
  },

  query: (q, data) => {
    return new Promise((resolve, reject) => {
      connection.query(q, data, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  end: () => {
    connection.end((err) => {
      if (err) return console.error(err.toString());
      console.log("Connection closed...!");
    });
  },

  insert: (sql) => {
    connection.query(sql, function (err, result) {
      if (err) return console.error(err);
      console.log("Dados inserted: ", result.affectedRows);
    });
  },

  update: (sql, data) => {
    connection.query(sql, data, (error, results, fields) => {
      if (error) return console.error(error);
      console.log("Dados atualizado com suc", results.affectedRows);
    });
  },

  delete: (sql) => {
    connection.query(sql, (error, results, fields) => {
      if (error) return console.error(error.message);

      console.log("Dados deleted:", results.affectedRows);
    });
  },
};

db.connect();

export default db;
