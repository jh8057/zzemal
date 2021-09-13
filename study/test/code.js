const test1 = document.querySelector("span");
const answer = document.querySelector("answer");

console.log(test1.dataset);
const BASE_URL =
  "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";

//   x_auth_token: "386e92a781b7880d4890c623ad7f1c08",
function getTokenApi() {
  fetch(`${BASE_URL}/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      problem: 1,
    }),
  })
    .catch(console.log)
    .then((res) => {
      if (res.ok) {
        alert("start complete");
        console.log(res.json());
      }
    });
}
// const parseToDos = JSON.parse(loadToDos);
getTokenApi();
