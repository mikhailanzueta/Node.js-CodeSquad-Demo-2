//Establish our Node/Express Server Environment
const express = require('express');

const app = express();

const PORT = 4100;

app.get('/', (request, response, next) => {
    response.send(`Welcome to the cafes home page!`);
})

// Adding more routes
app.get('/menu', (request, response, next) => {
    response.send('Welcome to the cafes menu');
})
app.get('/katz', (request, response, next) => {
    response.send('Welcome to the cafes cat wall of fame!');
})
app.get('/admin', (request, response, next) => {
    response.send('Hello, this page is for admins only!');
})

// Set up the server
app.listen(PORT, () => {
    console.log(`Welcome to the Cool CodeSquader! Now loading server... on${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

// Boot up the server
