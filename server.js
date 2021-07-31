const express = require('express');
const app = express();
const apiRouter = require('./api/api')
const webSocket = require('ws');


// Start a http server instance using app.listen()
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, console.log(`Server listening on port: ${PORT}`));

// Create a websocket server that uses running http server instance.
const wsServer = new webSocket.Server({ server });

// On new connection send a message to the client. Print and return message from the client.
wsServer.on('connection', (ws) => {
  ws.send('Hi there, I am a WebSocket server');

  ws.on('message', (message) => {
    console.log('received: %s', message);
    //ws.send(`Hello, you sent -> ${message}`);
  });

});



app.use('/api', apiRouter);

module.exports = { app, wsServer };