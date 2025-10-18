import mysql from "mysql2/promise";

let connection;

if (!global.connection) {
  global.connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Hostinger limit se kam rakho
    queueLimit: 0,
    connectTimeout: 10000,
    enableKeepAlive: true
  });
}

connection = global.connection;

export default connection;
