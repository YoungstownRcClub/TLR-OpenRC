const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let carSocket = null;

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (msg) => {
    try {
      const data = JSON.parse(msg);

      // If this is the car node registering itself
      if (data.register === "car") {
        carSocket = ws;
        console.log("Car registered.");
      } else if (carSocket) {
        carSocket.send(JSON.stringify(data)); // Forward control message
      }
    } catch (e) {
      console.error("Invalid message:", e);
    }
  });

  ws.on('close', () => {
    if (ws === carSocket) {
      carSocket = null;
      console.log("Car disconnected.");
    }
  });
});

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Controller UI running at http://localhost:3000');
});
