/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-18 15:35:56
 */

import SkChase from './SkChase';
import InternalSpin from './Spin';
import Spinner from './Spinner';

type InternalSpinType = typeof InternalSpin;

interface SpinInterface extends InternalSpinType {
  Spinner: typeof Spinner;
  SkChase: typeof SkChase;
}

const Spin = InternalSpin as SpinInterface;

Spin.Spinner = Spinner;
Spin.SkChase = SkChase;

export { Spin };
