/*
 * @Author: Vir
 * @Date: 2021-06-27 15:36:01
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-27 21:50:30
 */

// 按钮类型 default默认，text文本，link链接，dashed虚线
export type ButtonTypes = "default" | "text" | "link" | "dashed";

export interface ButtonProps extends HTMLButtonElement {
  type?: ButtonTypes;
}
