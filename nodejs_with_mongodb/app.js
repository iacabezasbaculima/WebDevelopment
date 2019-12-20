// Get express module
const express = require('express');

// Create app
const app = express();

// Listen to port
app.listen(3000, () => {
    console.log('App is listening to port: 3000.');
});

// Open index.html in 'public' folder at port:3000 
app.use(express.static('public'));

// Database handler
const mongo = require('mongodb');

// Create a mongo database
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const collection = "geolocations";

// Allow server to parse incoming data as JSON maxmimum 1mb
app.use(express.json({ limit: '1mb' }));

// POST method route
// specify endpoint in node.js server as '/api'
// specify callback
app.post('/api', (request, response) => {
    /*Log POST request from client-side */
    console.log(`Data received: ${request.body.lat}, ${request.body.lng}`);
    
    /* Connecto to mongo database */
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        
        var myobj = {
            lat: request.body.lat,
            lng: request.body.lng,
            timestamp: Date.now()
        };
        dbo.collection('geolocations').insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("Added a new geolocation to the database.");
            db.close();
        });

    });
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

// GET method
app.get('/api/get/geolocations', (request, response) => {
    /* Connecto to mongo database */
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        
        
    });
});



