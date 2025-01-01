const db = require('../models/suvicharModel');

const addSuvichar = (req, res) => {
    const { upload_image } = req.body;

    if (!upload_image) {
        return res.status(400).json({ error: 'Image URL is required.' });
    }

    const query = `
        INSERT INTO suvichars (upload_image) 
        VALUES (?)
    `;

    const values = [upload_image];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error adding suvichar:', err);
            return res.status(500).json({ error: 'Failed to add suvichar.' });
        }
        res.status(201).json({ message: 'Suvichar added successfully.', suvicharId: result.insertId });
    });
};

module.exports = { addSuvichar };
