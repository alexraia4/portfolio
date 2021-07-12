require('dotenv').config();
const express = require('express');
const app = express();


const { SERVER_PORT } = process.env
const path = require('path');


//has to be after routes
app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../build/index.html')) 
})

app.listen(SERVER_PORT, () => {
      console.log(`Listening on port ${SERVER_PORT}`)
})