const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch artist data from Chartmetric API
router.get('/tracks/:id', async (req, res) => {
  try {
       // Retrieve the token from the frontend
       const token = req.headers.authorization.split(' ')[1];
    // Fetch artist data from Chartmetric API
        // Make the API request using the token as an authorization header
        const headers = {
            Authorization: `Bearer ${token}`
          };
      
    const response = await axios.get(`https://api.chartmetric.com/api/track/${req.params.id}`, {headers 
    });

    // Return the artist data as a response
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error fetching tracks data from Chartmetric API ${error.message}`);
  }
});

module.exports = router;
