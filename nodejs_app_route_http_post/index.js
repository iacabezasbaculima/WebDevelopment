// Get express module
const express = require('express');
// Create app
const app = express();
// Listen to port: 3000
app.listen(3000, () => {
    console.log('Listening to port: 3000.');
});
// Source index.html file in 'public' folder at port: 3000
app.use(express.static('public'));
// Allow server to parse incoming data as JSON maxmimum 1mb
app.use(express.json({ limit: '1mb' }));
// POST method route
// specify endpoint in node.js server as '/api'
// specify callback
app.post('/api', (request, response) => {
    /*Log POST request from client-side */
    console.log(`Data received: ${request.body.lat}, ${request.body.lng}`);

    /*Send a response to client-side */
    // 1. response.end();
    // 2. response.send('Data received by server at endpoint /api');
    // 3. response.json(): send data to client in JSON format
    response.json(
        {
            status: 'ok',
            latitude: request.body.lat,
            longitude: request.body.lng
        }
    );
});