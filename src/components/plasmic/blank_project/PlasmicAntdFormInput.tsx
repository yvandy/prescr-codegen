// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJSLnzQiU882Sm76eQ6ECs
// Component: RJj2IYTf9q
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: bJSLnzQiU882Sm76eQ6ECs/projectcss
import * as sty from "./PlasmicAntdFormInput.module.css"; // plasmic-import: RJj2IYTf9q/css

export type PlasmicAntdFormInput__VariantMembers = {};

export type PlasmicAntdFormInput__VariantsArgs = {};
type VariantPropType = keyof PlasmicAntdFormInput__VariantsArgs;
export const PlasmicAntdFormInput__VariantProps = new Array<VariantPropType>();

export type PlasmicAntdFormInput__ArgsType = {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
};

type ArgPropType = keyof PlasmicAntdFormInput__ArgsType;
export const PlasmicAntdFormInput__ArgProps = new Array<ArgPropType>(
  "label",
  "type",
  "placeholder",
  "name"
);

export type PlasmicAntdFormInput__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAntdFormInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  className?: string;
}

function PlasmicAntdFormInput__RenderFunc(props: {
  variants: PlasmicAntdFormInput__VariantsArgs;
  args: PlasmicAntdFormInput__ArgsType;
  overrides: PlasmicAntdFormInput__OverridesType;
  dataFetches?: PlasmicAntdFormInput__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAntdFormInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAntdFormInput__VariantsArgs;
    args?: PlasmicAntdFormInput__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAntdFormInput__Fetches;
  } & Omit<PlasmicAntdFormInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAntdFormInput__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAntdFormInput__ArgProps,
      internalVariantPropNames: PlasmicAntdFormInput__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAntdFormInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAntdFormInput";
  } else {
    func.displayName = `PlasmicAntdFormInput.${nodeName}`;
  }
  return func;
}

export const PlasmicAntdFormInput = Object.assign(
  // Top-level PlasmicAntdFormInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAntdFormInput
    internalVariantProps: PlasmicAntdFormInput__VariantProps,
    internalArgProps: PlasmicAntdFormInput__ArgProps
  }
);

export default PlasmicAntdFormInput;
/* prettier-ignore-end */
