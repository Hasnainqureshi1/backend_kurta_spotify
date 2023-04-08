const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
// for using req.body  required middleware 
app.use(express.json())
//Availabe Routes
app.use('/api',require("./Routes/token"))
app.use('/api',require("./Routes/artists"))
app.use('/api',require("./Routes/tracks"))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
