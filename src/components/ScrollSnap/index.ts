/*
 * @Author: Vir
 * @Date: 2021-07-16 14:49:57
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-16 15:04:46
 */

import Item from './Item';
import InternalScrollSnap from './ScrollSnap';

type InternalScrollSnapType = typeof InternalScrollSnap;

interface ScrollSnapInterface extends InternalScrollSnapType {
  Item: typeof Item;
}

const ScrollSnap = InternalScrollSnap as ScrollSnapInterface;

ScrollSnap.Item = Item;

export { ScrollSnap };
