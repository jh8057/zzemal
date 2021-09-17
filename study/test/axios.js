const axios = require("axios");

console.log(response);
const BASE_URL =
  "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";
const TOKEN = "75c9aa74e9011c5ff1091c5fd783004b";

class KAKAOAPI {
  startAPI() {
    return axios({
      method: "post",
      url: `${BASE_URL}/start`,
      headers: {
        "X-Auth-Token": `${TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        problem: 1,
      },
    }).then((res) => {
      console.log("FINISH START");
      return res.data.auth_key;
    });
  }
  async locationAPI(startToken) {
    return axios({
      method: "get",
      url: `${BASE_URL}/locations`,
      headers: {
        Authorization: `${startToken}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("FINISH LOCATION");
      console.log(res.data);
      return res.data;
    });
  }
  async truckAPI(startToken) {
    return axios({
      method: "get",
      url: `${BASE_URL}/trucks`,
      headers: {
        Authorization: `${startToken}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("FINISH TRUCK");
      console.log(res.data);
      return res.data;
    });
  }
  async simulationAPI(startToken) {
    return axios({
      method: "put",
      url: `${BASE_URL}/simulate`,
      headers: {
        Authorization: `${startToken}`,
        "Content-Type": "application/json",
      },
      data: {
        commands: [{ truck_id: 0, command: [2, 5, 2, 6] }],
      },
    }).then((res) => {
      console.log("FINISH SIMULATION");
      console.log(res.data);
      return res.data;
    });
  }
  async scoreAPI(startToken) {
    return axios({
      method: "get",
      url: `${BASE_URL}/score`,
      headers: {
        Authorization: `${startToken}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("FINISH TRUCK");
      console.log(res.data);
      return res.data;
    });
  }
}

const problem1 = new KAKAOAPI();

// async function simulation() {
//   let sToken = await problem1.startAPI();
//   console.log(sToken);

//   let status = "ready";
//   while (status === "ready") {
//     let result = await problem1.simulationAPI(sToken);
//     status = result.status;
//   }

//   problem1.scoreAPI(sToken);
// }
// simulation();
// problem1.simulationAPI();
// problem1.simulationAPI();
// problem1.simulationAPI();
// problem1.simulationAPI();
// problem1.locationAPI();
