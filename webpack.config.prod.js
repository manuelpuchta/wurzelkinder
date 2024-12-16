const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "css", to: "css" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "datenschutz.html", to: "datenschutz.html" },
        { from: "impressum.html", to: "impressum.html" },
        { from: "kontakt.html", to: "kontakt.html" },
        {
          from: "google7dbcc30a9c6be3c0.html",
          to: "google7dbcc30a9c6be3c0.html",
        },
      ],
    }),
  ],
});
