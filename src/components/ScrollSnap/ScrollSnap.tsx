/*
 * @Author: Vir
 * @Date: 2021-07-16 14:26:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:11:22
 */

import { css } from '@emotion/css';
import React from 'react';
import { ScrollSnapProps, SnapLocation, SnapType } from './interface';

const ScrollSnapBaseCss = (
  location: SnapLocation = 'both',
  type: SnapType = 'mandatory',
) => {
  return css`
    overflow: auto;
    scroll-snap-type: ${location} ${type};
  `;
};

const InternalScrollSnap: React.FC<ScrollSnapProps> = ({
  location,
  type,
  children,
  ...props
}) => {
  console.log(children);
  return (
    <div className={ScrollSnapBaseCss(location, type)} {...props}>
      {children}
    </div>
  );
};

export default InternalScrollSnap;
