/*
 * @Author: Vir
 * @Date: 2021-07-18 15:05:04
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 21:52:18
 */

import { BaseSize } from '@/types/global';
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { SkChaseProps } from './interface';

const SkChaseDotDelayCss = () => {
  return [1, 2, 3, 4, 5, 6].map((i) => {
    return css`
      &:nth-child(${i}) {
        animation-delay: -${1.2 - i / 10}s;
      }
    `;
  });
};

const SkChaseDotBeforeDelayCss = () => {
  return [1, 2, 3, 4, 5, 6].map((i) => {
    return css`
      &:nth-child(${i})::before {
        animation-delay: -${1.2 - i / 10}s;
      }
    `;
  });
};

const SkChaseKeyframes = () => {
  return keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;
};

const SkChaseDotKeyframes = () => {
  return keyframes`
    80%, 100% {
      transform: rotate(360deg);
    }
  `;
};

const SkChaseDotBeforeKeyframes = () => {
  return keyframes`
    50% {
      transform: scale(0.4);
    }
    100%, 0% {
      transform: scale(1);
    }
  `;
};

const SkChaseDotCss = () => {
  return css`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${SkChaseDotKeyframes()} 2s infinite ease-in-out both;
    ${SkChaseDotDelayCss()}
    ${SkChaseDotBeforeDelayCss()}
    &::before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      border-radius: 100%;
      background-color: white;
      animation: ${SkChaseDotBeforeKeyframes()} 2s infinite ease-in-out both;
    }
  `;
};

const SkChaseBaseCss = (size: BaseSize = 'medium') => {
  return css`
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    position: relative;
    animation: ${SkChaseKeyframes()} 2.5s infinite linear both;
  `;
};

const SkChase: React.FC<SkChaseProps> = ({ size, ...props }) => {
  return (
    <div className={SkChaseBaseCss(size)}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className={SkChaseDotCss()}></div>
      ))}
    </div>
  );
};

export default SkChase;
