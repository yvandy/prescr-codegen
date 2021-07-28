import * as React from "react";
import {
  DefaultAntdButtonProps
} from "./plasmic/blank_project/PlasmicAntdButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
interface AntdButtonProps extends DefaultAntdButtonProps { }
function AntdButton_(props: AntdButtonProps, ref: HTMLElementRefOf<"div">) {
  return <div className={props.className}>
    <h1>
      hello
    </h1>
  </div>
}

const AntdButton = React.forwardRef(AntdButton_);
export default AntdButton;
