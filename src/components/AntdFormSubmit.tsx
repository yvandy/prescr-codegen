import * as React from "react";
import {
  PlasmicAntdFormSubmit,
  DefaultAntdFormSubmitProps
} from "./plasmic/blank_project/PlasmicAntdFormSubmit";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button } from "antd";
interface AntdFormSubmitProps extends DefaultAntdFormSubmitProps { }
function AntdFormSubmit_(
  props: AntdFormSubmitProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <Button className={props.className} type="primary" htmlType="submit">
      Submit
    </Button>
  )
}

const AntdFormSubmit = React.forwardRef(AntdFormSubmit_);
export default AntdFormSubmit;
