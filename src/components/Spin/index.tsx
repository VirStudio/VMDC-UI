/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 21:57:55
 */

import Chase from './Chase';
import InternalSpin from './Spin';
import Spinner from './Spinner';

type InternalSpinType = typeof InternalSpin;

interface SpinInterface extends InternalSpinType {
  Spinner: typeof Spinner;
  Chase: typeof Chase;
}

const Spin = InternalSpin as SpinInterface;

Spin.Spinner = Spinner;
Spin.Chase = Chase;

export { Spin };
