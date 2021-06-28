const path = require("path");
const webpack = require("webpack");
const WebpackBar = require("webpackbar"); // build显示进度
// const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //打包时清理之前打包的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          "babel-loader?cacheDirectory",
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 抽取样式文件，将css样式文件用link标签引入，使用此loader就不需要用style-loader，即使用了也不会有效果
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: devMode
                  ? "[path][name]__[local]"
                  : "[hash:base64:5]",
              },
              importLoaders: 2, // 一个css中引入了另一个css，也会执行之前两个loader，即postcss-loader和sass-loader
            },
          },
          // {
          //   // 使用 postcss 为 css 加上浏览器前缀
          //   loader: "postcss-loader",
          //   options: {
          //     // options has an unknown property 'plugins';
          //     postcssOptions: {
          //       // PostCSS plugin autoprefixer requires PostCSS 8.将autoprefixer降到8.0.0版本
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          // },
          {
            loader: "sass-loader", // 使用 sass-loader 将 scss 转为 css
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    // new CleanWebpackPlugin()
  ],
};
