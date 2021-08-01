const express = require('express');
const app = express();
const apiRouter = require('./api/api')
const webSocket = require('ws');



// Start a http server instance using app.listen()
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, console.log(`Server listening on port: ${PORT}`));

// Generate continuously a random number. Last 90 numbers must be unique.
const getRandomNumber = () => Math.ceil(Math.random() * 90);
let randomNumber;
let last89Used = [];
setInterval(() => {
 
  while (last89Used.indexOf(randomNumber) !== -1) {
    randomNumber = getRandomNumber();
  }

  last89Used.push(randomNumber);

  while (last89Used.length > 89) {
    last89Used.shift();
  }

}, 5000);


// Create a websocket server that uses running http server instance.
const wsServer = new webSocket.Server({ server });



// On new connection send a message to the client. If client doesn't return the 
wsServer.on('connection', (socket) => {
  socket.send('Hi there, I am a WebSocket server');

  setInterval(() => {
    wsServer.clients.forEach((client) => {
      if (client.readyState === webSocket.OPEN) {
        client.send(randomNumber);
      }
    });
  }, 5000);
 

  socket.on('message', (message) => {
    console.log('received: %s', message);
  }); 

});


app.use('/api', apiRouter);

module.exports = { app, wsServer };