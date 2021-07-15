/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-12 17:56:48
 */

import { css } from '@emotion/css';
import React from 'react';
import { SpinProps } from './interface';
import Spinner from './Spinner';

const SpinBaseCss = () => {
  return css`
    position: relative;
  `;
};

const SpinIndicatorCss = () => {
  return css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

const InternalSpin: React.FC<SpinProps> = ({
  spinning,
  children,
  size,
  indicator,
  ...props
}) => {
  const renderIcon = () => {
    if (indicator) {
      return indicator;
    }
    return <Spinner size={size} />;
  };

  return (
    <>
      {children ? (
        <div className={SpinBaseCss()}>
          <div className={SpinIndicatorCss()}>{renderIcon()}</div>
          {children}
        </div>
      ) : (
        renderIcon()
      )}
    </>
  );
};
export default InternalSpin;
