import * as React from "react";
import {
  PlasmicAntdFormUpload,
  DefaultAntdFormUploadProps
} from "./plasmic/blank_project/PlasmicAntdFormUpload";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
interface AntdFormUploadProps extends DefaultAntdFormUploadProps { }

function AntdFormUpload_(
  props: AntdFormUploadProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicAntdFormUpload root={{ ref }} {...props} />;
}

const AntdFormUpload = React.forwardRef(AntdFormUpload_);
export default AntdFormUpload;
