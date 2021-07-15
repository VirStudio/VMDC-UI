/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-12 17:56:48
 */

import InternalSpin from './Spin';
import Spinner from './Spinner';

type InternalSpinType = typeof InternalSpin;

interface SpinInterface extends InternalSpinType {
  Spinner: typeof Spinner;
}

const Spin = InternalSpin as SpinInterface;

Spin.Spinner = Spinner;

export { Spin };
