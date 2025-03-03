const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.js",
  output: {
    // filename: "development.js",
    filename: "production.js",
    path: path.resolve(__dirname, "dist"),
  },
};
