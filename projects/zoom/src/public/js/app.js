const msgList = document.querySelector("ul");
const msgformNick = document.querySelector("#Nick");
const msgformCont = document.querySelector("#Contents");
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server✅");
});

socket.addEventListener("message", (msg) => {
  console.log("Msg from Server this :", msg.data);
  const li = document.createElement("li");
  li.innerText = msg.data;
  msgList.appendChild(li);
});

socket.addEventListener("close", () => {
  console.log("Disconnected to Server❌");
});

function handleSubmitNick(event) {
  event.preventDefault();
  const input = msgformNick.querySelector("input");
  socket.send(
    JSON.stringify({
      type: "Nickname",
      text: `${input.value}`,
    })
  );
  input.value = "";
}

function handleSubmitCont(event) {
  event.preventDefault();
  const input = msgformCont.querySelector("input");
  socket.send(
    JSON.stringify({
      type: "contents",
      text: `${input.value}`,
    })
  );
  input.value = "";
}

msgformNick.addEventListener("submit", handleSubmitNick);
msgformCont.addEventListener("submit", handleSubmitCont);
