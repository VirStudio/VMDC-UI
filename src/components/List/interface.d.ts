/*
 * @Author: Vir
 * @Date: 2021-06-30 21:43:53
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-04 16:55:56
 */

export interface ListItemProps extends HTMLDivElement {}

export interface ListProps extends HTMLDivElement {
  subheader?: React.ReactNode;
  disablePadding?: boolean;
  dataSource?: any[];
  itemBuilder?: (args) => args;
  children?: React.ReactNode;
}
