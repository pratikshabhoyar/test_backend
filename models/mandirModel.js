const { addMandir ,updateMandir, deleteMandir} = require('../controllers/mandirController');
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_db',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }
    console.log('Connected to the database.');
  });
  
  const createMandirTable = () => {
    const query = `
      CREATE TABLE IF NOT EXISTS mandir (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        nickname VARCHAR(255),
        description TEXT,
        images TEXT,
        youtube_live_link VARCHAR(255),
        offline_video_morning VARCHAR(255),
        offline_video_evening VARCHAR(255),
        offline_video_night VARCHAR(255),
        aarti_time_morning TIME,
        aarti_time_evening TIME,
        aarti_time_night TIME,
        map_link VARCHAR(255)
      )`;
  
    db.query(query, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Mandir table is ready.');
      }
    });
  };
  
  createMandirTable();
  
  module.exports = db;
  