import * as React from "react";
import {
  PlasmicAntdTestComp,
  DefaultAntdTestCompProps
} from "./plasmic/presc_codegen/PlasmicAntdTestComp";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Select } from 'antd';



interface AntdTestCompProps extends DefaultAntdTestCompProps { }

function AntdTestComp_(props: AntdTestCompProps, ref: HTMLElementRefOf<"div">) {
  const { Option } = Select;

  return <PlasmicAntdTestComp root={{ ref }} {...props} >
    <Select style={{ width: 120 }} >

    </Select>
  </PlasmicAntdTestComp>;
}

const AntdTestComp = React.forwardRef(AntdTestComp_);
export default AntdTestComp;
