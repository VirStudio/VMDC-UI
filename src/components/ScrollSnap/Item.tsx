/*
 * @Author: Vir
 * @Date: 2021-07-16 14:46:03
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:10:54
 */

import { css } from '@emotion/css';
import React from 'react';
import { ScrollSnapItemProps } from './interface';

const ItemBaseCss = () => {
  return css`
    scroll-snap-align: center;
    scroll-snap-stop: always;
  `;
};

const Item: React.FC<ScrollSnapItemProps> = ({ children, ...props }) => {
  return (
    <div className={ItemBaseCss()} {...props}>
      {children}
    </div>
  );
};

export default Item;
