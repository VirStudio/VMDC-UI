/*
 * @Author: Vir
 * @Date: 2021-07-12 17:36:17
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-12 17:56:48
 */

import React from "react";
import { SpinProps } from "./interface";
import Spinner from "./Spinner";

const Spin: React.FC<SpinProps> = (props) => {
  return (
    <div style={{ background: "#D35400", padding: "200px" }}>
      <Spinner />
    </div>
  );
};
export default Spin;
