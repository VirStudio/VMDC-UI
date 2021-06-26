/*
 * @Author: Vir
 * @Date: 2021-06-26 20:28:20
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-26 20:37:13
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = require("./dist/vmdcui.js");
} else {
  module.exports = require("./dist/vmdcui.min.js");
}
