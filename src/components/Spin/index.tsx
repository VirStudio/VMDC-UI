/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-19 15:51:06
 */

import Bounce from './Bounce';
import Chase from './Chase';
import InternalSpin from './Spin';
import Plane from './Plane';
import Stretch from './Stretch';

type InternalSpinType = typeof InternalSpin;

interface SpinInterface extends InternalSpinType {
  Plane: typeof Plane;
  Chase: typeof Chase;
  Bounce: typeof Bounce;
  Stretch: typeof Stretch;
}

const Spin = InternalSpin as SpinInterface;

Spin.Plane = Plane;
Spin.Chase = Chase;
Spin.Bounce = Bounce;
Spin.Stretch = Stretch;

export { Spin };
