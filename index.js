// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile('/public/index.html', { root: __dirname })
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets)
    // Sends the entire `pets` array as a json response.
});    

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;
    // Extracts the owner's name from the request query string.
    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);
    // Finds the pet in the pets array that matches the owner's name.

    // send the pet as a response
    res.json(pet)
    // Sends the found pet array by owner as a json response.
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const name = req.params.name;
    // Extracts the pet's name from the request parameters.
    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);
    // Finds the pet in the pets array that matches the inputed pet name.

    // send the pet as a response
    res.json(pet)
    // Sends the found pet as a JSON response.

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;