/*
 * @Author: Vir
 * @Date: 2021-06-27 13:16:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 15:40:50
 */

import React from "react";
import { Meta } from "@storybook/react";
import { Button as Component } from "../../../src/components/Button/Button";

export default {
  title: "Base(基础)/Button(按钮)",
  component: Component,
} as Meta;

export const Button = (args: any) => {
  const { showGroup, direction, ...other } = args;
  return <Component {...other}>默认的按钮</Component>;
};
