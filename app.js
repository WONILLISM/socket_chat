const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  // console.log('a user connected');
});

server.listen(3000, () => {
  console.log(`listening on ${PORT}`);
});
