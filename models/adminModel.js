const mysql = require("mysql2");

// // Create the connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // Export the pool for querying the database
// module.exports = pool.promise();

const db_admin = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_db',
  });
  
  db_admin.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }
    console.log('Connected to the database.');
  });
  module.exports = db_admin.promise();