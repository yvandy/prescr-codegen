import * as React from "react";
import {
  PlasmicAntDTagLine,
  DefaultAntDTagLineProps
} from "./plasmic/presc_codegen/PlasmicAntDTagLine";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Tag, Divider } from 'antd';

interface AntDTagLineProps extends DefaultAntDTagLineProps { }



function AntDTagLine_(props: AntDTagLineProps, ref: HTMLElementRefOf<"div">) {


  return <div>
    <Tag color="magenta">With Us You Feel Safe</Tag>
  </div>
}

const AntDTagLine = React.forwardRef(AntDTagLine_);
export default AntDTagLine;
