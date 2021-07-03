const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('server.crt'),
  key: fs.readFileSync('server.key')
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, request, client) {

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
  });

  ws.send('Something');
});

server.listen(8080)