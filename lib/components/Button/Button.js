"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Vir
 * @Date: 2021-06-26 20:02:09
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-13 16:46:11
 */
var css_1 = require("@emotion/css");
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, type = _a.type, props = __rest(_a, ["children", "type"]);
    var contained = css_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: rgb(95, 95, 95);\n    color: white;\n  "], ["\n    background-color: rgb(95, 95, 95);\n    color: white;\n  "])));
    var ButtonBaseCss = css_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-radius: 4px;\n    padding: 8px 22px;\n    font-size: 12px;\n    border: 1px solid transparent;\n    box-shadow: none;\n    transition: all 0.3s;\n    background-color: white;\n    border-color: #d9d9d9;\n    cursor: pointer;\n    ", "\n  "], ["\n    border-radius: 4px;\n    padding: 8px 22px;\n    font-size: 12px;\n    border: 1px solid transparent;\n    box-shadow: none;\n    transition: all 0.3s;\n    background-color: white;\n    border-color: #d9d9d9;\n    cursor: pointer;\n    ", "\n  "])), type === "contained" ? contained : "");
    return (react_1.default.createElement("button", { type: "button", className: ButtonBaseCss }, children));
};
exports.default = Button;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Button.js.map