const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    // emit real time updates to connected clients
    setInterval(() => {
        socket.emit('update', {message: 'New data available'});
    }, 5000); // update every 5 secs

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});