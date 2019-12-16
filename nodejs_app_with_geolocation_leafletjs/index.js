// Get express module
const express = require('express');

// Create app
const app = express();

// Set port to listen 
app.listen(3000, () => {
    console.log('Server is listening to port: 3000.')
});

// Open index.html in 'public' folder at port:3000 
app.use(express.static('public'));
