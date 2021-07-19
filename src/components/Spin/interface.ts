/*
 * @Author: Vir
 * @Date: 2021-07-11 11:47:52
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-19 15:50:32
 */

import { ReactNode } from 'react';
import { BaseSize, BaseType } from '../../types/global';

interface SpinItemBaseProps {
  size?: BaseSize;
  type?: BaseType;
}

export interface PlaneProps extends SpinItemBaseProps {}

export interface PlaneCSSProps {
  size?: BaseSize;
}

export interface ChaseProps extends SpinItemBaseProps {}

export interface BounceProps extends SpinItemBaseProps {}

export interface StretchProps extends SpinItemBaseProps {}

export type SpinType = 'plane' | 'chase' | 'bounce';

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
  size?: BaseSize;
  /**
   * @description       指示器类型
   * @default
   */
  type?: SpinType;
}
