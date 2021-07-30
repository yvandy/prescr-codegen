import * as React from "react";
import { Select } from 'antd';
import {
  PlasmicAntdFormSelect,
  DefaultAntdFormSelectProps
} from "./plasmic/presc_codegen/PlasmicAntdFormSelect";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

interface AntdFormSelectProps extends DefaultAntdFormSelectProps { }

function AntdFormSelect_(
  props: AntdFormSelectProps,
  ref: HTMLElementRefOf<"div">
) {

  const { Option } = Select;


  return <div>

    <Select defaultValue="lucy" style={{ width: 120 }} >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>
}

const AntdFormSelect = React.forwardRef(AntdFormSelect_);
export default AntdFormSelect;
