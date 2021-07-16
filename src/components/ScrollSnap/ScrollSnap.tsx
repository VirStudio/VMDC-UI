/*
 * @Author: Vir
 * @Date: 2021-07-16 14:26:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:53:41
 */

import { css } from '@emotion/css';
import React from 'react';
import { ScrollSnapProps, SnapLocation, SnapType } from './interface';

const ScrollSnapBaseCss = (
  location: SnapLocation = 'both',
  type: SnapType = 'mandatory',
) => {
  return css`
    overflow: auto;
    scroll-snap-type: ${location} ${type};
  `;
};

const InternalScrollSnap: React.FC<ScrollSnapProps> = ({
  location = 'both',
  type = 'mandatory',
  children,
  align = 'center',
  stop = 'always',
  ...props
}) => {
  return (
    <div className={ScrollSnapBaseCss(location, type)} {...props}>
      {React.Children.map(children, (child) => {
        if (child.type.name !== 'Item') {
          throw new Error(
            'the children of component ScrollSnap muse be component ScrollSnap.Item',
          );
        }
        return React.cloneElement(child, {
          ...child.props,
          ...{ align, stop },
        });
      })}
    </div>
  );
};

export default InternalScrollSnap;
