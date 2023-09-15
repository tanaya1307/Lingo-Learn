const express = require('express');
const router = express.Router();
const ImageDesc = require('../models/image'); // Import the Mongoose model

// Route to retrieve data from the "ImageDesc" collection
router.get('/imageDesc', async (req, res) => {
  try {
    const imageDescData = await ImageDesc.find(); // Retrieve all documents from the collection
    res.json(imageDescData);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
