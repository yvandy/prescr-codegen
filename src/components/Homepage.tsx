import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/blank_project/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Form } from "antd";
import { useDispatch } from 'react-redux';
import { FormItem } from "../typings/types";

interface HomepageProps extends DefaultHomepageProps { }

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {

  const submitDispatch = useDispatch();
  const onFinish = (values: FormItem) => {
    const formValues = {
      ...values,
      date: values.date.format('YYYY-MM-DD')
    };
    submitDispatch({
      type: "submit",
      payload: formValues
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return <Form name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}>
    <PlasmicHomepage root={{ ref }} {...props} />;
  </Form>
}
const Homepage = React.forwardRef(Homepage_);
export default Homepage;