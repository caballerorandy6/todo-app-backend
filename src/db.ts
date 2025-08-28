import mysql from "mysql2/promise";

const pool = mysql.createPool({
  uri: process.env.MYSQL_URL as string,
  connectionLimit: 10,
});

export default pool;
