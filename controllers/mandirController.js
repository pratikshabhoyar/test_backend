const db = require('../models/mandirModel');

const addMandir = (req, res) => {
  const {
    title,
    nickname,
    description,
    images,
    youtube_live_link,
    offline_video_morning,
    offline_video_evening,
    offline_video_night,
    aarti_time_morning,
    aarti_time_evening,
    aarti_time_night,
    map_link,
  } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required.' });
  }

  const query = `
    INSERT INTO mandir (
      title, nickname, description, images, youtube_live_link,
      offline_video_morning, offline_video_evening, offline_video_night,
      aarti_time_morning, aarti_time_evening, aarti_time_night, map_link
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    title,
    nickname,
    description,
    images,
    youtube_live_link,
    offline_video_morning,
    offline_video_evening,
    offline_video_night,
    aarti_time_morning,
    aarti_time_evening,
    aarti_time_night,
    map_link,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting mandir:', err);
      return res.status(500).json({ error: 'Failed to add mandir.' });
    }
    res.status(201).json({ message: 'Mandir added successfully.', mandirId: result.insertId });
  });
};





//UPDATE MANDIR CODE
const updateMandir = (req, res) => {
    const mandirId = req.params.id;
    const {
      title,
      nickname,
      description,
      images,
      youtube_live_link,
      offline_video_morning,
      offline_video_evening,
      offline_video_night,
      aarti_time_morning,
      aarti_time_evening,
      aarti_time_night,
      map_link,
    } = req.body;
  
    if (!mandirId) {
      return res.status(400).json({ error: 'Mandir ID is required.' });
    }
  
    const query = `
      UPDATE mandir SET
        title = ?, 
        nickname = ?, 
        description = ?, 
        images = ?, 
        youtube_live_link = ?, 
        offline_video_morning = ?, 
        offline_video_evening = ?, 
        offline_video_night = ?, 
        aarti_time_morning = ?, 
        aarti_time_evening = ?, 
        aarti_time_night = ?, 
        map_link = ?
      WHERE id = ?`;
  
    const values = [
      title,
      nickname,
      description,
      images,
      youtube_live_link,
      offline_video_morning,
      offline_video_evening,
      offline_video_night,
      aarti_time_morning,
      aarti_time_evening,
      aarti_time_night,
      map_link,
      mandirId,
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating mandir:', err);
        return res.status(500).json({ error: 'Failed to update mandir.' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Mandir not found.' });
      }
      res.status(200).json({ message: 'Mandir updated successfully.' });
    });
  };
  
  

  //DELETE MANDIR CODE
  const deleteMandir = (req, res) => {
    const mandirId = req.params.id;
  
    const query = `DELETE FROM mandir WHERE id = ?`;
  
    db.query(query, [mandirId], (err, result) => {
      if (err) {
        console.error('Error deleting mandir:', err);
        return res.status(500).json({ error: 'Failed to delete mandir.' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Mandir not found.' });
      }
      res.status(200).json({ message: 'Mandir deleted successfully.' });
    });
  };
  

  module.exports = { addMandir,updateMandir, deleteMandir };
