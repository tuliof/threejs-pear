const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|hig|svg)$/i,
        loader: "file-loader",
        options: { name: "[path][name].[ext]" },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html" }],
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
