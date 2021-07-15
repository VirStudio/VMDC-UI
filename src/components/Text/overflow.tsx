/*
 * @Author: Vir
 * @Date: 2021-07-05 17:40:33
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-11 20:33:03
 */

import { css } from '@emotion/css';
import React from 'react';
import { TextOverflowProps } from './interface';

const Overflow: React.FC<TextOverflowProps> = ({
  element = 'p',
  row = 1,
  children,
  ...props
}) => {
  const singleCss = css`
    white-space: nowrap;
  `;
  const multiCss = css`
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${row};
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
  `;
  const TextOverflowBaseCss = css`
    width: 100%;
    > * {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      ${row === 1 ? singleCss : multiCss}
    }
  `;
  return (
    <div className={TextOverflowBaseCss}>
      {React.createElement(element, {}, children)}
    </div>
  );
};

export default Overflow;
