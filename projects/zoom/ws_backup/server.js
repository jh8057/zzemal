import http from "http";
import WebSocket from "ws";
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

const handleListen = () =>
  console.log(`Listening on http://localhost:3000  port`);
// app.listen(3000, handleListen);

const server = http.createServer(app);

const DATABASE = [];

const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  DATABASE.push(socket);
  socket["Nickname"] = "USER";
  console.log("Connected to Browser✅");
  socket.on("message", (msg) => {
    console.log(JSON.parse(msg));
    const parsed = JSON.parse(msg);
    switch (parsed.type) {
      case "contents":
        DATABASE.forEach((saveSocket) => {
          saveSocket.send(
            `${socket.Nickname} : ${parsed.text.toString("utf8")}`
          );
        });
        break;
      case "Nickname":
        socket["Nickname"] = parsed.text;
    }
    console.log(msg.toString("utf8"));
  });

  socket.on("close", () => {
    console.log("Disconnected to Browser❌");
  });
});
server.listen(3000, handleListen);
