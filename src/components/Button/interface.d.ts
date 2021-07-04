/*
 * @Author: Vir
 * @Date: 2021-06-27 15:36:01
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-04 16:22:23
 */

import { BaseSize } from "../../types/global";

// 按钮类型 default默认，text文本，link链接，dashed虚线
export type ButtonTypes = "contained" | "outlined" | "text" | "link" | "dashed";

// 按钮颜色
export type ButtonColors = "default" | "primary" | "danger";

// 按钮大小
export type ButtonSize = BaseSize;

export interface ButtonProps extends HTMLButtonElement {
  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSize;
  children?: React.ReactNode;
}
