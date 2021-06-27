/*
 * @Author: Vir
 * @Date: 2021-06-27 13:16:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 13:41:51
 */

import React from "react";
import { Button as Component } from "../../../src/components/Button/Button";

export default {
  title: "Button",
  component: Component,
};

export const Button = (args: any) => {
  const { showGroup, direction, ...other } = args;
  return <Component {...other}></Component>;
};
