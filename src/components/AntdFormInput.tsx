import * as React from "react";
import {
  DefaultAntdFormInputProps
} from "./plasmic/blank_project/PlasmicAntdFormInput";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button, DatePicker, Form, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
interface AntdFormInputProps extends DefaultAntdFormInputProps { }
function AntdFormInput_(
  props: AntdFormInputProps,
  ref: HTMLElementRefOf<"div">
) {

  let inputEle;
  switch (props.type) {

    case "number": {
      inputEle = <InputNumber />
      break;
    }
    case "date": {
      inputEle = <DatePicker format="YYYY-MM-DD HH:mm:ss" />
      break;
    }
    case "upload": {
      inputEle = <Upload>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      break;
    }
    default: {
      inputEle = <Input />
      break;
    }
  }
  return (
    <Form.Item className={props.className}
      label={props.label}
      name="patientName"
      rules={[
        {
          required: true,
          message: 'Please input your patient name!',
        },
      ]}
    >
      {inputEle}
    </Form.Item>

  )
}
const AntdFormInput = React.forwardRef(AntdFormInput_);
export default AntdFormInput;
