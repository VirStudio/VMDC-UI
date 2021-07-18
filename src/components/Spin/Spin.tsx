/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 15:29:11
 */

import { css, keyframes } from '@emotion/css';
import React from 'react';
import { SpinProps } from './interface';
import SkChase from './SkChase';
import Spinner from './Spinner';

const SpinBaseCss = () => {
  return css`
    position: relative;
  `;
};

const SpinKeyframes = (opa1: number = 1, opa2: number = 1) => {
  return keyframes`
    0% {
      opacity: ${opa1};
    }
    100% {
      opacity: ${opa2};
    }
  `;
};

const SpinIndicatorCss = (spinning: boolean) => {
  return css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    animation: ${SpinKeyframes(0, 1)} 0.3s 1 ease-in-out
      ${spinning ? 'normal' : 'reverse'} forwards;
  `;
};

const SpinContentCss = (spinning: boolean) => {
  return css`
    animation: ${SpinKeyframes(0.5)} 0.3s 1 ease-in-out
      ${spinning ? 'reverse' : 'normal'} forwards;
  `;
};

const InternalSpin: React.FC<SpinProps> = ({
  spinning = false,
  children,
  size = 'medium',
  indicator,
  type = 'spinner',
  ...props
}) => {
  const delay = 100; // 指示器延迟
  const [staticSpinning, setStaticSpinning] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setStaticSpinning(spinning);
    }, delay);
  }, [spinning]);

  const renderIcon = () => {
    if (indicator) {
      return indicator;
    }
    switch (type) {
      case 'skchase':
        return <SkChase size={size} />;
      default:
      case 'spinner':
        return <Spinner size={size} />;
    }
  };

  return (
    <>
      {children ? (
        <div className={SpinBaseCss()}>
          {staticSpinning && (
            <div className={SpinIndicatorCss(spinning)}>{renderIcon()}</div>
          )}
          <div className={SpinContentCss(spinning)}>{children}</div>
        </div>
      ) : (
        renderIcon()
      )}
    </>
  );
};
export default InternalSpin;
