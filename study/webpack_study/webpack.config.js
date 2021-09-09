const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCss({
      filename: "common.css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"],
      },
    ],
  },
};
