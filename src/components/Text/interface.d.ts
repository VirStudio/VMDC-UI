/*
 * @Author: Vir
 * @Date: 2021-07-05 17:40:26
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-06 13:38:31
 */

export interface TextOverflowProps extends HTMLElement {
  element?: "p" | "span";
  row?: number;
  children: string;
}
