const http = require('http');  // Required to create the server
const app = require('./app');  // Import the app.js file


const PORT = 5003;  // Define the port

// Create the server
const server = http.createServer(app);

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
