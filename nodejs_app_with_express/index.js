// Get express package 
const express = require('express');

// App
const app = express();

// Listen to a port
app.listen(3000, () => {
    console.log('Server is listening at port:3000.');
});

// Open index.html in 'public' folder at port:3000 
app.use(express.static('public'));
