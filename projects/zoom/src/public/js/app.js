const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");
const room = document.querySelector("#room");

room.hidden = true;

let roomName = "";

function finishEmit(msg) {
  console.log("Finish emit message!");
  console.log("Backend Say : ", msg);
}

function addMessage(msg) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const form = room.querySelector("form");
  form.addEventListener("submit", handleMessgeSubmit);
}
function handleMessgeSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("input");
  const value = input.value;
  socket.emit("new_message", value, roomName, () => {
    addMessage(`You " ${value}`);
  });
  input.value = "";
}
function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit(
    "room",
    { room: input.value, id: socket.id.substring(0, 5) },
    showRoom
  );
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (payload) => {
  addMessage(`"${payload.id}" JOIN OUR ROOM`);
});

socket.on("bye", () => {
  addMessage(`someone Left OUR ROOM`);
});

socket.on("new_message", (msg) => {
  addMessage(`someone : ${msg}`);
});
