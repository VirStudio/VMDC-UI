/*
 * @Author: Vir
 * @Date: 2021-07-11 11:45:36
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-14 13:50:40
 */
import { css, keyframes } from "@emotion/css";
import React from "react";
import { SpinnerCSSProps, SpinnerProps } from "./interface";

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

const SpinnerBaseCSS = ({ size = "medium", ...props }: SpinnerCSSProps) => {
  const SizeMap = {
    small: 20,
    medium: 30,
    large: 40,
  };
  return css`
    display: block;
    width: ${SizeMap[size]}px;
    height: ${SizeMap[size]}px;
    background-color: #fff;
    animation: ${SpinnerKeyframes(SizeMap[size])} 1.2s infinite ease-in-out;
  `;
};

const Spinner: React.FC<SpinnerProps> = ({ size = "medium", ...props }) => {
  return <i className={SpinnerBaseCSS({ size })} />;
};

export default Spinner;
