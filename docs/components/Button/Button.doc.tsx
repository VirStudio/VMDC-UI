/*
 * @Author: Vir
 * @Date: 2021-06-27 13:16:16
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-30 21:45:03
 */

import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "../../../src/components/Button/Button";
import { ButtonProps } from "../../../src/components/Button/interface";

export default {
  title: "Base(基础)/Button(按钮)",
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const Default: Story<ButtonProps> = Template.bind({});
Default.storyName = "默认按钮";
Default.args = {
  children: "默认按钮",
};

export const Contained: Story<ButtonProps> = Template.bind({});
Contained.storyName = "实心按钮";
Contained.args = {
  type: "contained",
  children: "实心按钮",
};
