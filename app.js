const express = require('express');
const app = express();
const http = require('http');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const user_list = new Array();

app.get('/', (req, res) => {
  // root 페이지로 접속시 index.html 렌더링
  res.sendFile(__dirname + '/index.html');
});

// socket.io의 기본 이벤트, 사용자가 웹 사이트를 열면 자동으로 발생하는 이벤트
// 채팅방에 접속했을 때 - 1
io.on('connection', socket => {
  if (user_list) io.emit('user_list', user_list);

  socket.on('welcome-msg', nickname => {
    console.log(`${nickname} connected`);

    // user_list에 추가
    let new_user = {
      id: socket.id,
      nickname: nickname,
    };
    user_list.push(new_user);

    io.emit('update_user_list', new_user);
    socket.broadcast.emit('welcome-msg', nickname);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });

  socket.on('chat message', (nick, msg) => {
    io.emit('chat message', nick, msg);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
