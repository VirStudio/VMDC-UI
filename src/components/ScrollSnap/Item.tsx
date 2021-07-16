/*
 * @Author: Vir
 * @Date: 2021-07-16 14:46:03
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:55:21
 */

import { css } from '@emotion/css';
import React from 'react';
import { ScrollSnapItemProps, SnapAlign, SnapStop } from './interface';

const ItemBaseCss = (
  align: SnapAlign = 'center',
  stop: SnapStop = 'always',
) => {
  return css`
    scroll-snap-align: ${align === 'start-end' ? 'start end' : align};
    scroll-snap-stop: ${stop};
  `;
};

const Item: React.FC<ScrollSnapItemProps> = ({
  children,
  align = 'center',
  stop = 'always',
  ...props
}) => {
  return (
    <div className={ItemBaseCss(align, stop)} {...props}>
      {children}
    </div>
  );
};

export default Item;
