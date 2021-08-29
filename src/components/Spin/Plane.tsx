/*
 * @Author: Vir
 * @Date: 2021-07-11 11:45:36
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 15:08:58
 */
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { PlaneCSSProps, PlaneProps } from './interface';

const PlaneKeyframes = (size: number) => {
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

const PlaneBaseCSS = ({
  size = 'medium',
  color = '#fff',
  ...props
}: PlaneCSSProps) => {
  return css`
    display: block;
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    background-color: ${color};
    animation: ${PlaneKeyframes(SizeMap[size])} 1.2s infinite ease-in-out;
  `;
};

const Plane: React.FC<PlaneProps> = ({ size = 'medium', color, ...props }) => {
  return <i className={PlaneBaseCSS({ size, color })} />;
};

export default Plane;
