import * as React from "react";
import {
  PlasmicAntFormLabel,
  DefaultAntFormLabelProps
} from "./plasmic/blank_project/PlasmicAntFormLabel";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
interface AntFormLabelProps extends DefaultAntFormLabelProps { }

function AntFormLabel_(props: AntFormLabelProps, ref: HTMLElementRefOf<"div">) {
  return (<span>Label</span>);
}

const AntFormLabel = React.forwardRef(AntFormLabel_);
export default AntFormLabel;
