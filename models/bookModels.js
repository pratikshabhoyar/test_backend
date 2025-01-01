const mysql = require('mysql2');
const { addBook } = require('../controllers/bookController');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_db', // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});
const createBookTable = () => {
    const query = `
      CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        book_name VARCHAR(255) NOT NULL,
        cover_image VARCHAR(255) NOT NULL,
        upload_book_pdf VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
  
    db.query(query, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Book table is ready.');
      }
    });
  };
  
  createBookTable();
  

module.exports = db;
