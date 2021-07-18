/*
 * @Author: Vir
 * @Date: 2021-07-11 11:45:36
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 15:08:58
 */
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { SpinnerCSSProps, SpinnerProps } from './interface';

const SpinnerKeyframes = (size: number) => {
  const perspectiveNum = size * 3;
  const tran = (fDeg: number, sDeg: number) =>
    `perspective(${perspectiveNum}px) rotateX(${fDeg}deg) rotateY(${sDeg}deg)`;
  return keyframes`
  0% {
    transform:${tran(0, 0)};
  }
  50% {
    transform:${tran(-180.1, 0)};
  }
  100% {
    transform:${tran(-180, -179.9)};
  }
  `;
};

const SpinnerBaseCSS = ({ size = 'medium', ...props }: SpinnerCSSProps) => {
  return css`
    display: block;
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    background-color: #fff;
    animation: ${SpinnerKeyframes(SizeMap[size])} 1.2s infinite ease-in-out;
  `;
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', ...props }) => {
  return <i className={SpinnerBaseCSS({ size })} />;
};

export default Spinner;
