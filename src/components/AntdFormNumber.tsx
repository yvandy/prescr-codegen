import * as React from "react";
import {
  PlasmicAntdFormNumber,
  DefaultAntdFormNumberProps
} from "./plasmic/blank_project/PlasmicAntdFormNumber";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
interface AntdFormNumberProps extends DefaultAntdFormNumberProps { }
function AntdFormNumber_(
  props: AntdFormNumberProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicAntdFormNumber root={{ ref }} {...props} />;
}

const AntdFormNumber = React.forwardRef(AntdFormNumber_);
export default AntdFormNumber;
