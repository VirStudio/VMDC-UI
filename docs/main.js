/*
 * @Author: Vir
 * @Date: 2021-06-27 13:09:30
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 13:39:08
 */
const path = require("path");

function findDocs() {}

module.exports = {
  // 自定义webpack配置
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
  // 匹配文件类型
  stories: ["./components/**/*.doc.@(js|jsx|ts|tsx)"],
  // 引入storybook插件
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
