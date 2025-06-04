// -----Code Using http Server-----

import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const io = new WebSocketServer({ server });

io.on('connection', function connection(socket) {
    socket.on('error', console.error);

    socket.on('message', function message(data) {
        io.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
        });
  });

  socket.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
