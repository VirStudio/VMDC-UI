/*
 * @Author: Vir
 * @Date: 2021-07-05 17:40:26
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-14 14:56:42
 */

import { FunctionComponent, ComponentClass } from 'react';

export interface TextOverflowProps {
  /**
   * @description       组件渲染的HTML标签
   * @default           p
   */
  element?: string | FunctionComponent<{}> | ComponentClass<{}, any>;
  /**
   * @description       段落行数
   * @default           1
   */
  row?: number;
  /**
   * @description       文字内容
   */
  children: HTMLCollection;
}
