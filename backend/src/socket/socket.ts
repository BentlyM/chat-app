import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
  },
});

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap[receiverId];
}

const userSocketMap: { [key: string]: string } = {};

io.on('connect', (socket) => {
  console.log('a user connected', socket.id);

  const userId = socket.handshake.query.userId as string;

  if (userId) userSocketMap[userId] = socket.id;

  // Emit online users when a new user connects
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    delete userSocketMap[userId];

    // Emit updated list of online users when someone disconnects
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
