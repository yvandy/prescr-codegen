import * as React from "react";
import {
  DefaultAntdFileUploadProps
} from "./plasmic/blank_project/PlasmicAntdFileUpload";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
interface AntdFileUploadProps extends DefaultAntdFileUploadProps { }
function AntdFileUpload_(
  props: AntdFileUploadProps,
  ref: HTMLElementRefOf<"div">
) {
  return (<Upload className={props.className}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>);
}

const AntdFileUpload = React.forwardRef(AntdFileUpload_);
export default AntdFileUpload;
