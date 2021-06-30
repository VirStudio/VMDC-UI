/*
 * @Author: Vir
 * @Date: 2021-06-27 15:36:01
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 21:50:30
 */

// 按钮类型 default默认，text文本，link链接，dashed虚线
export type ButtonTypes = "contained" | "outlined" | "text" | "link" | "dashed";

// 按钮颜色
export type ButtonColors = "default" | "primary" | "danger";

// 按钮大小
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends HTMLButtonElement {
  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSize;
  children?: React.ReactNode;
}
