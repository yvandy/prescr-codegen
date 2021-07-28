import * as React from "react";
import {
  DefaultAntdDatePickerProps
} from "./plasmic/blank_project/PlasmicAntdDatePicker";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { DatePicker } from "antd";
interface AntdDatePickerProps extends DefaultAntdDatePickerProps { }

function AntdDatePicker_(
  props: AntdDatePickerProps,
  ref: HTMLElementRefOf<"div">
) {
  return <DatePicker className={props.className} />;
}

const AntdDatePicker = React.forwardRef(AntdDatePicker_);
export default AntdDatePicker;
