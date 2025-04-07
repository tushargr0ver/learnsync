const { Server } = require("socket.io");

function initSocket(server) { //	Creating a new Socket.IO server, and attaching it to your raw HTTP server.
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", //allows req from frontend
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => { //triggers when a new client connects, each tab gets socket.id
    console.log("New client connected:", socket.id); 

    socket.on("message", (data) => {
      console.log("Message received:", data);
      io.emit("message", data); // Broadcast message to all
    });

    socket.on("disconnect", () => {
      console.log("🔌 Client disconnected:", socket.id);
    });
  });
}

module.exports = { initSocket };
