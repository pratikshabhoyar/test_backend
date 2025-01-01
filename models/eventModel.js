const mysql = require('mysql2');
const { addEvent } = require('../controllers/eventController');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

const createEventTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS event (
      id INT AUTO_INCREMENT PRIMARY KEY,
      banner_image VARCHAR(255),
      event_title VARCHAR(255) NOT NULL,
      event_location VARCHAR(255),
      event_date DATE,
      event_time TIME,
      event_description TEXT,
      event_link VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  db.query(query, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Event table is ready.');
    }
  });
};

createEventTable();

module.exports = db;
