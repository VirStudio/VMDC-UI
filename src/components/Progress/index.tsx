/*
 * @Author: Vir
 * @Date: 2021-08-29 11:47:19
 * @Last Modified by: Vir
 * @Last Modified time: 2021-08-29 16:56:37
 */

import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

export interface Section {
  color: string;
  percent: number;
  text?: string;
}

export interface ProgressProps {
  classname?: string;
  /**
   * @description       进度百分比
   * @default           0
   */
  percent: number;
  /**
   * @description       分段
   * @default
   */
  section?: Section[];
  /**
   * @description       是否显示百分比
   * @default           false
   */
  showPercent?: boolean;
}

const ProgressRootCSS = css``;

const ProgressLineRootCSS = css`
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: #f5f5f5;
  border-radius: 100px;
  height: 12px;
`;

const ProgressLineBgCSS = (percent: number) => {
  const num = percent <= 0 ? 0 : percent >= 100 ? 100 : percent;

  return css`
    width: ${num}%;
    height: 12px;
    background-color: #1890ff;
    border-radius: 100px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 12px;
  `;
};

const ProgressLineSectionCSS = (section: Section) => {
  return css`
    position: absolute;
    background-color: ${section.color};
    z-index: ${100 - section.percent};
    left: 0;
    top: 0;
    opacity: 1;
  `;
};

const ProgressLineSectionHoverCSS = css`
  opacity: 0 !important;
`;

const Progress: React.FC<ProgressProps> = (props) => {
  const { percent, section, showPercent = false } = props;

  const [current, setCurrent] = React.useState<number | null>(null);

  // 校验分段显示百分比总计
  if (section) {
    const count: number = section.reduce(
      (prev, next): number => prev.percent + next.percent,
    );
    if (count > 100) {
      throw new Error('The percentage cannot be greater than 100');
    }
  }
  return (
    <div className={classNames(ProgressRootCSS)}>
      <div className={classNames(ProgressLineRootCSS)}>
        {section ? (
          section.map((i: Section, j: number) => (
            <div
              key={i.percent}
              className={classNames([
                ProgressLineBgCSS(i.percent),
                ProgressLineSectionCSS(i),
                {
                  [ProgressLineSectionHoverCSS]:
                    current !== j && current !== null,
                },
              ])}
              onMouseEnter={() => setCurrent(j)}
              onMouseLeave={() => setCurrent(null)}
            >
              {showPercent ? `${i.percent}%` : ''}
            </div>
          ))
        ) : (
          <div className={classNames(ProgressLineBgCSS(percent))}>
            {showPercent ? `${percent}%` : ''}
          </div>
        )}
      </div>
    </div>
  );
};

export { Progress };
