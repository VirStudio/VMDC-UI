const path = require("path");
const webpack = require("webpack");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: devMode ? "vmdcui.js" : "vmdcui.min.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader?cacheDirectory", "ts-loader"],
      },
    ],
  },
  plugins: [],
};
