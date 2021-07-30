import * as React from "react";
import {
  PlasmicAntdFormSubmit,
  DefaultAntdFormSubmitProps
} from "./plasmic/blank_project/PlasmicAntdFormSubmit";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button } from "antd";
import { useState } from "react";
interface AntdFormSubmitProps extends DefaultAntdFormSubmitProps { }
function AntdFormSubmit_(
  props: AntdFormSubmitProps,
  ref: HTMLElementRefOf<"div">
) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = () => {
    submitPrescription({
      name: 'vandana',
      patientId: Math.floor(Math.random() * 1000),
      age: 30,
      date: new Date(),
      medication: 'disprin',
    });
  }
  const submitPrescription = async (precriptionData: any) => {
    setIsSubmitting(true);
    await fetch('https://prescription-app-84502-default-rtdb.firebaseio.com/prescription.json', {
      method: 'POST',
      body: JSON.stringify({
        precription: precriptionData,
      })
    });
    setIsSubmitting(false);
  }
  return (
    <Button className={props.className} type="primary" htmlType="submit" onClick={submitHandler}>
      Submit
    </Button>
  )
}

const AntdFormSubmit = React.forwardRef(AntdFormSubmit_);
export default AntdFormSubmit;
