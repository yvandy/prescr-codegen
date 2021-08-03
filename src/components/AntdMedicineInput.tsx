
import * as React from "react";
import {
  PlasmicAntdMedicineInput,
  DefaultAntdMedicineInputProps
} from "./plasmic/presc_codegen/PlasmicAntdMedicineInput";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Form, Input, InputNumber, Select } from "antd";
import { useSelector } from 'react-redux';
import { MedicineItem, StateItem } from "../typings/types";

interface AntdMedicineInputProps extends DefaultAntdMedicineInputProps {
  name: string;
}

function AntdMedicineInput_(
  props: AntdMedicineInputProps,
  ref: HTMLElementRefOf<"div">
) {
  const medicines = useSelector((state: StateItem) => state.medicines);

  const medicineData: MedicineItem[] = [];

  for (const key in medicines) {
    medicineData.push({
      id: key,
      label: medicines[key].name,
      value: medicines[key].value
    })
  }

  return (
    <Form.Item className={props.className} label={props.label}>
      <Input.Group compact>
        <Form.Item
          name={[props.name, 'name']}
          noStyle
        >
          <Select defaultValue="Medication" style={{ width: '60%' }} options={medicineData}></Select>
        </Form.Item>
        <Form.Item
          name={[props.name, 'dosage']}
          noStyle
        >
          <InputNumber style={{ width: '40%' }} placeholder="Dosage" />
        </Form.Item>
      </Input.Group>
    </Form.Item>
  )
}
const AntdMedicineInput = React.forwardRef(AntdMedicineInput_);
export default AntdMedicineInput;
