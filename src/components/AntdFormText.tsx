import * as React from "react";
import {
  PlasmicAntdFormText,
  DefaultAntdFormTextProps
} from "./plasmic/blank_project/PlasmicAntdFormText";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Input } from "antd";
interface AntdFormTextProps extends DefaultAntdFormTextProps { }
function AntdFormText_(props: AntdFormTextProps, ref: HTMLElementRefOf<"div">) {
  return <Input className={props.className} />;
}

const AntdFormText = React.forwardRef(AntdFormText_);
export default AntdFormText;
