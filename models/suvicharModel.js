const mysql = require('mysql2');
const { addSuvichar } = require('../controllers/suvicharController');
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
const createSuvicharsTable = () => {
    const query = `
      CREATE TABLE IF NOT EXISTS suvichars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        upload_image VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
  
    db.query(query, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Suvichar table is ready.');
      }
    });
  };
  
  createSuvicharsTable();

module.exports = db;
