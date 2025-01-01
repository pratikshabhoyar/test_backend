const db = require('../models/bookModels');

const addBook = (req, res) => {
    const { book_name, cover_image, upload_book_pdf } = req.body;

    if (!book_name || !cover_image || !upload_book_pdf) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `
        INSERT INTO books (book_name, cover_image, upload_book_pdf) 
        VALUES (?, ?, ?)
    `;

    const values = [book_name, cover_image, upload_book_pdf];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error adding book:', err);
            return res.status(500).json({ error: 'Failed to add book.' });
        }
        res.status(201).json({ message: 'Book added successfully.', bookId: result.insertId });
    });
};

module.exports = { addBook };
