/*
 * @Author: Vir
 * @Date: 2021-07-16 14:26:23
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 14:58:45
 */

export type SnapLocation = 'x' | 'y' | 'block' | 'inline' | 'both';

export type SnapType = 'proximity' | 'mandatory';

export type SnapAlign = 'none' | 'start' | 'end' | 'center' | 'start-end';

export type SnapStop = 'normal' | 'always';

export interface ScrollSnapItemProps {
  align?: SnapAlign;
  stop?: SnapStop;
  children: any;
}

export interface ScrollSnapProps {
  location?: SnapLocation;
  type?: SnapType;
  align?: SnapAlign;
  stop?: SnapStop;
  children: React.FC<ScrollSnapItemProps>[];
}
