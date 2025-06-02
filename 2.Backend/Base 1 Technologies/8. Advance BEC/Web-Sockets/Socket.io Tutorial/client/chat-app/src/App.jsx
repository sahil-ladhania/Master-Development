import React, { useEffect, useState } from "react";
import socket from "./socket";

function App() {
  // State Variables
  const [socketId, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");

  // Handler Functions
  const handleRoomChange = (e) => {
    setRoomName(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSpecificRoom = (e) => {
    setRoom(e.target.value);
  }

  const handleRoomJoin = (e) => {
    e.preventDefault();
    socket.emit("join-room" , roomName);
    setRoomName("");
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(room !== ""){
      socket.emit("room-message" , {room , message});
      setRoom("");
    }
    else{
      socket.emit("send-message" , message);
    }
    setMessage("");
  }

  // Connecting to Socket
  useEffect(() => {
    socket.on("connect" , () => {
      console.log("Connected to Server : " , socket.id);
      setSocketId(socket.id);
    });

    socket.on("receive-message" , (data) => {
      console.log(`Message Got From ${data.senderId} : ${data.message}`);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          senderId : data.senderId,
          message : data.message
        }
      ]);
    });
  }, [])
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
        {/* Socket ID */}
        <div className="text-sm text-gray-600 mb-6">
          <span className="font-semibold">Your Socket ID:</span> {socketId}
        </div>

        {/* Room Join Input */}
        <form onSubmit={handleRoomJoin} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Room Name"
            onChange={handleRoomChange}
            value={roomName}
            className="px-4 py-2 border rounded-md"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">JOIN</button>
        </form>

        {/* Message & Room Inputs */}
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Room"
            value={room}
            onChange={handleSpecificRoom}
            className="px-4 py-2 border rounded-md"
          />
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">SEND</button>
        </form>

        {/* Message List */}
        <div className="w-full max-w-md space-y-2">
          {
            (messages.length > 0) ?
              messages.map((m , index) => (
                <div key={index} className="bg-white p-3 rounded shadow text-left">
                  <p className="text-xs text-gray-500">From: {m.senderId}</p>
                  <p className="font-medium">{m.message}</p>
                </div>
              ))
              :
              <div className="bg-white text-red-700 p-3 rounded shadow text-left">No Messages Yet !!!</div>
          }
        </div>
      </div>
    </>
  );
}

export default App;