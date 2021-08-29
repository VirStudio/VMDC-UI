/*
 * @Author: Vir
 * @Date: 2021-07-18 21:54:10
 * @Last Modified by:   Vir
 * @Last Modified time: 2021-07-18 21:54:10
 */

import { BaseSize } from '@/types/global';
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { BounceProps } from './interface';

const BounceBeforeKeyframes = () => {
  return keyframes`
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  `;
};

const BounceBaseCss = (size: BaseSize = 'medium', color: string = '#fff') => {
  return css`
    display: block;
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${color};
      border-radius: 50%;
      top: 0;
      left: 0;
      opacity: 0.6;
      animation: ${BounceBeforeKeyframes()} 2s infinite ease-in-out;
    }
    &::after {
      animation-delay: 1s;
    }
  `;
};

const Bounce: React.FC<BounceProps> = ({ size, color, ...props }) => {
  return <i className={BounceBaseCss(size, color)}></i>;
};

export default Bounce;
