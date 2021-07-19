/*
 * @Author: Vir
 * @Date: 2021-07-18 15:05:04
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 21:54:48
 */

import { BaseSize } from '@/types/global';
import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SizeMap } from './config';
import { ChaseProps } from './interface';

const ChaseDotDelayCss = () => {
  return [1, 2, 3, 4, 5, 6].map((i) => {
    return css`
      &:nth-child(${i}) {
        animation-delay: -${1.2 - i / 10}s;
      }
      &:nth-child(${i})::before {
        animation-delay: -${1.2 - i / 10}s;
      }
    `;
  });
};

const ChaseKeyframes = () => {
  return keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;
};

const ChaseDotKeyframes = () => {
  return keyframes`
    80%, 100% {
      transform: rotate(360deg);
    }
  `;
};

const ChaseDotBeforeKeyframes = () => {
  return keyframes`
    50% {
      transform: scale(0.4);
    }
    100%, 0% {
      transform: scale(1);
    }
  `;
};

const ChaseDotCss = () => {
  return css`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${ChaseDotKeyframes()} 2s infinite ease-in-out both;
    ${ChaseDotDelayCss()}
    &::before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      border-radius: 100%;
      background-color: white;
      animation: ${ChaseDotBeforeKeyframes()} 2s infinite ease-in-out both;
    }
  `;
};

const ChaseBaseCss = (size: BaseSize = 'medium') => {
  return css`
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    position: relative;
    animation: ${ChaseKeyframes()} 2.5s infinite linear both;
  `;
};

const Chase: React.FC<ChaseProps> = ({ size, ...props }) => {
  return (
    <div className={ChaseBaseCss(size)}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className={ChaseDotCss()}></div>
      ))}
    </div>
  );
};

export default Chase;
