/*
 * @Author: Vir
 * @Date: 2021-07-16 14:26:23
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:52:24
 */

export type SnapLocation = 'x' | 'y' | 'block' | 'inline' | 'both';

export type SnapType = 'proximity' | 'mandatory';

export type SnapAlign = 'none' | 'start' | 'end' | 'center' | 'start-end';

export type SnapStop = 'normal' | 'always';

export interface ScrollSnapItemProps {
  /**
   * @description       指定框的snap位置为其snap容器snapport(作为对齐容器)中snap区域(作为对齐主题)的对齐。
   * @default
   */
  align?: SnapAlign;
  /**
   * @description       子元素，限制使用 ScrollSnap.Item
   * @default
   */
  stop?: SnapStop;
  /**
   * @description       子元素
   * @default
   */
  children: any;
}

export interface ScrollSnapProps {
  /**
   * @description       滚动容器的捕捉位置。
   * @default
   */
  location?: SnapLocation;
  /**
   * @description       滚动容器的可视视图将静止在临时点上的类型
   * @default
   */
  type?: SnapType;
  /**
   * @description       指定框的snap位置为其snap容器snapport(作为对齐容器)中snap区域(作为对齐主题)的对齐。
   * @default
   */
  align?: SnapAlign;
  /**
   * @description       滚动容器是否允许“传递”可能的snap位置。
   * @default
   */
  stop?: SnapStop;
  /**
   * @description       子元素，限制使用 ScrollSnap.Item
   * @default
   */
  children: any[];
}
