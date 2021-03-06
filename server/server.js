const express = require('express');

// Load the express library from node_modules/express:
const app = express();

// Define a global variable to hold our port address:
const PORT = 5000;

// Require the router:
const taskRouter = require('./routes/taskRouter');

// Give us the ability to "read" HTTP request body data in
// different encodings:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tell express where to find our "public" files:
app.use(express.static('server/public'));

// Forward all requests to /songs to our songsRouter:
app.use('/tasks', taskRouter);

// Starts the server, and listens for requests:
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
});