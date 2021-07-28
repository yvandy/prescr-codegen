import * as React from "react";
import {
  PlasmicAntdFormLabel,
  DefaultAntdFormLabelProps
} from "./plasmic/blank_project/PlasmicAntdFormLabel";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Fragment } from "react";

interface AntdFormLabelProps extends DefaultAntdFormLabelProps { }
function AntdFormLabel_(
  props: AntdFormLabelProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <Fragment>
      <span className={props.className}>Label</span>
    </Fragment>
  );
}

const AntdFormLabel = React.forwardRef(AntdFormLabel_);
export default AntdFormLabel;
