const http = require("http");
http
  .createServer((request, response) => {
    console.log("server start!");
    return request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (data) => {
        console.log(data);
      })
      .on("end", () => {
        response.on("error", (err) => {
          console.error(err);
        });
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.write("hi\n");
        response.end("the end!");
      });
  })
  .listen(8080);
