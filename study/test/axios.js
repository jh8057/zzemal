const axios = require("axios");

async function printlog() {
  let result = await axios({
    method: "get",
    url: "http://bit.ly/2mTM3nY",
    responseType: "stream",
  }).then((res) => {
    console.log("FINISH");
    return res;
  });
  //   console.log(result);
  console.log(typeof result);
  console.log(result.statusText);
}
printlog();
