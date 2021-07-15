/*
 * @Author: Vir
 * @Date: 2021-07-11 11:47:52
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-12 17:49:03
 */

import { ReactNode } from 'react';
import { BaseSize, BaseType } from '../../types/global';

export type Size = BaseSize;

export interface SpinnerProps {
  size?: Size;
  type?: BaseType;
}

export interface SpinnerCSSProps {
  size?: Size;
}

export type SpinType = 'spinner';

export interface SpinProps {
  /**
   * @description       加载状态
   * @default           false
   */
  spinning?: boolean;
  /**
   * @description       子元素，不存在时以图标形式显示
   * @default
   */
  children?: ReactNode;
  /**
   * @description       加载状态的指示器
   * @default
   */
  indicator?: ReactNode;
  /**
   * @description       指示器大小
   * @default
   */
  size?: Size;
  /**
   * @description       指示器类型
   * @default           spinner
   */
  type?: SpinType;
}
