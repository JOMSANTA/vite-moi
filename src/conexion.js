const mysql = require("mysql");
const conexion = mysql.createConnection({
  host: "localhost",
  database: "moi",
  user: "root",
  password: "root123",
});
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("corriendo");
  }
});
