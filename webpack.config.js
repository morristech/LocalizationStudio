const path = require("path");

//https://segmentfault.com/q/1010000014770071?sort=created
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
