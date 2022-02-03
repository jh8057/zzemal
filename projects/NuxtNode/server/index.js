const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
app.use(routes);

const config = require("../nuxt.config.js");
const { Nuxt, Builder } = require("nuxt");
const nuxt = new Nuxt(config);

const http = require("http");
const server = http.createServer(app);
app.use(nuxt.render);

// if (config.dev) {
const builder = new Builder(nuxt);
builder.build();
// }

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
