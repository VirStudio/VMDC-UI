"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/*
 * @Author: Vir
 * @Date: 2021-06-26 20:02:09
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 21:40:07
 */
/** @jsxImportSource @emotion/react */
var react_1 = require("@emotion/react");
var vmdcBtn = react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 4px;\n  padding: 8px 22px;\n  font-size: 12px;\n  border: 1px solid transparent;\n  box-shadow: none;\n  transition: all 0.3s;\n  background-color: white;\n  border-color: #d9d9d9;\n"], ["\n  border-radius: 4px;\n  padding: 8px 22px;\n  font-size: 12px;\n  border: 1px solid transparent;\n  box-shadow: none;\n  transition: all 0.3s;\n  background-color: white;\n  border-color: #d9d9d9;\n"])));
var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    console.log(children, props);
    return (jsx_runtime_1.jsx("button", __assign({ type: "button", css: vmdcBtn }, { children: children }), void 0));
};
exports.Button = Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map