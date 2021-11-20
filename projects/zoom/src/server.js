import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

//pug 사용
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// user 에서 public폴더 제공
app.use("/public", express.static(__dirname + "/public"));

//route
app.get("/", (req, res) => res.render("home"));
//다른 경로 재설정
app.get("/*", (req, res) => res.redirect("/"));

const httpserver = http.createServer(app);
const wsServer = SocketIO(httpserver);

wsServer.on("connection", (socket) => {
  socket.onAny((event) => {
    console.log(`socket Evnet : ${event}`);
  });
  socket.on("room", (payload, done) => {
    socket.join(payload.room);
    done();
    socket.to(payload.room).emit("welcome", { id: payload.id });
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => socket.to(room).emit("bye"));
  });
  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", msg);
    done();
  });
});

// const wss = new WebSocket.Server({ server });
// const DATABASE = [];
// wss.on("connection", (socket) => {
//   DATABASE.push(socket);
//   socket["Nickname"] = "USER";
//   console.log("Connected to Browser✅");
//   socket.on("message", (msg) => {
//     console.log(JSON.parse(msg));
//     const parsed = JSON.parse(msg);
//     switch (parsed.type) {
//       case "contents":
//         DATABASE.forEach((saveSocket) => {
//           saveSocket.send(
//             `${socket.Nickname} : ${parsed.text.toString("utf8")}`
//           );
//         });
//         break;
//       case "Nickname":
//         socket["Nickname"] = parsed.text;
//     }
//     console.log(msg.toString("utf8"));
//   });
//   socket.on("close", () => {
//     console.log("Disconnected to Browser❌");
//   });
// });

const handleListen = () => {
  console.log(`Listening on http://localhost:3000  port`);
};

httpserver.listen(3000, handleListen);
