const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
app.use(routes);

const config = require("../nuxt.config.js");
const { Nuxt, Builder } = require("nuxt");
config.dev = !(process.env.NODE_ENV === "production");
const nuxt = new Nuxt(config);
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}
app.use(nuxt.render);

const http = require("http");
const server = http.createServer(app);

// Listen the server
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
// Export express app
