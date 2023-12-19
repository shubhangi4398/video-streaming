const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('stream', (image) => {
    io.emit('stream', image); // Broadcast the received image to all connected clients
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
