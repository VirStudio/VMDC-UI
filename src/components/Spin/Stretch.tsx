/*
 * @Author: Vir
 * @Date: 2021-07-19 15:33:46
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-19 16:28:28
 */

import { BaseSize } from '@/types/global';
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { StretchProps } from './interface';

const StretchKeyframes = () => {
  return keyframes`
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
    }
  `;
};

const StretchDelayCss = () => {
  return [2, 3, 4, 5].map((i) => {
    return css`
      &:nth-child(${i}) {
        animation-delay: -${1.3 - i / 10}s;
      }
    `;
  });
};

const StretchBaseCss = (size: BaseSize = 'medium', color: string = '#fff') => {
  return css`
    /* 宽度：默认宽度 + 边距总和 */
    width: ${SizeMap[size] + SizeMap[size] / 3}px;
    height: ${SizeMap[size]}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > i {
      height: 100%;
      background-color: ${color};
      width: ${SizeMap[size] / 5}px;
      animation: ${StretchKeyframes()} 1.2s infinite ease-in-out;
      ${StretchDelayCss()}
    }
  `;
};

const Stretch: React.FC<StretchProps> = ({ size, color, ...props }) => {
  return (
    <div className={StretchBaseCss(size, color)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i}></i>
      ))}
    </div>
  );
};

export default Stretch;
