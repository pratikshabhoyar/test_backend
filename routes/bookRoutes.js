const express = require('express');
const router = express.Router();
const { addBook } = require('../controllers/bookController');

router.post('/add', addBook);

module.exports = router;
