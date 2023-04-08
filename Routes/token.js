const express = require("express");
const router = express.Router();
const axios = require('axios');

require('dotenv').config();
const refreshtoken = process.env.REFRESH_TOKEN;
 
router.post('/token',async (req,res)=>{
    const response = await axios.post( `https://api.chartmetric.com/api/token`, {
        refreshtoken
        
      });
      try {
          
          console.log( response.data);
    return res.json(response.data);
        // const expirationTime = new Date().getTime() + json.expires_in * 1000; // convert to milliseconds
         
        //  console.log(expirationTime)
         
        
        
        
      } catch (error) {
        console.log(error.message);
      }

    // return res.status(200).json({ message: "Token endpoint accessed successfully." });
})

module.exports = router;