/*
 * @Author: Vir
 * @Date: 2021-07-16 14:26:31
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 16:05:32
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
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    setCount(React.Children.count(children));
  }, [children]);

  return (
    <div
      className={ScrollSnapBaseCss(location, type)}
      onScroll={(e) => {
        console.log(e);
      }}
      {...props}
    >
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
