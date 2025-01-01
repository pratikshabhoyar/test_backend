const express = require('express');
const router = express.Router();
const { addSuvichar } = require('../controllers/suvicharController');

router.post('/add', addSuvichar);

module.exports = router;