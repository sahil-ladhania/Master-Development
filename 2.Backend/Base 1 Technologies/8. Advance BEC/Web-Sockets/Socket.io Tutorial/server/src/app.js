import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from "socket.io";

const port = 3000;
const app = express();

const server = createServer(app);

const io = new Server(server , {
  cors : {
    origin: "http://localhost:5173"
  }
});

io.on("connection" , (socket) => {
    console.log("User Connected ...");
    console.log("Socket Id : " , socket.id);

    socket.on("join-room" , (roomName) => {
      socket.join(roomName);
      console.log(`Socket ${socket.id} joined room ------> ${roomName}`);
    });

    socket.on("room-message" , ({room , message}) => {
      socket.to(room).emit("receive-message" , {
        senderId: socket.id,
        message,
      });
    })

    socket.on("send-message" , (message) => {
      socket.broadcast.emit("receive-message" , {
        message,
        senderId : socket.id
      });
    });
});

server.listen(port , () => {
    console.log(`Chat app listening on port ${port}`)
});
