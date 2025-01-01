const db = require('../models/eventModel');

const addEvent = (req, res) => {
  const {
    banner_image,
    event_title,
    event_location,
    event_date,
    event_time,
    event_description,
    event_link,
  } = req.body;

  if (!event_title) {
    return res.status(400).json({ error: 'Event title is required.' });
  }

  const query = `
    INSERT INTO event (
      banner_image, event_title, event_location, event_date, event_time, 
      event_description, event_link
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    banner_image,
    event_title,
    event_location,
    event_date,
    event_time,
    event_description,
    event_link,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error adding event:', err);
      return res.status(500).json({ error: 'Failed to add event.' });
    }
    res.status(201).json({ message: 'Event added successfully.', eventId: result.insertId });
  });
};

module.exports = { addEvent };
