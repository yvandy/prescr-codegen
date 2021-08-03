import * as React from "react";
import {
  DefaultAntdDatePickerProps
} from "./plasmic/blank_project/PlasmicAntdDatePicker";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { DatePicker, Form } from "antd";
interface AntdDatePickerProps extends DefaultAntdDatePickerProps { }

function AntdDatePicker_(
  props: AntdDatePickerProps,
  ref: HTMLElementRefOf<"div">
) {
  return <Form.Item wrapperCol={{ offset: 8, span: 16 }} name={props.name} className={props.className}>
    <DatePicker format="YYYY-MM-DD" />
  </Form.Item>
}

const AntdDatePicker = React.forwardRef(AntdDatePicker_);
export default AntdDatePicker;
