const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch artist data from Chartmetric API
router.get('/artists/:id', async (req, res) => {
  try {
       // Retrieve the token from the frontend
    //    const { token } = req.query;
    // Fetch artist data from Chartmetric API
    // Make the API request using the token as an authorization header
    const token = req.headers.authorization.split(' ')[1];
        const headers = {
            Authorization: `Bearer ${token}`
          };
    const response = await axios.get(`https://api.chartmetric.com/api/artist/${req.params.id}`, {headers 
    });

    // Return the artist data as a response
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching artist data from Chartmetric API');
  }
});

module.exports = router;
