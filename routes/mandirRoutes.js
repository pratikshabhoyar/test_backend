const express = require('express');
const router = express.Router();
const { addMandir,updateMandir, deleteMandir } = require('../controllers/mandirController');

router.post('/', addMandir);
console.log(addMandir); // Should log the function definition

// Update a mandir by ID
router.put('/:id', updateMandir);

// Delete a mandir by ID
router.delete('/:id', deleteMandir);

module.exports=router;
