// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJSLnzQiU882Sm76eQ6ECs
// Component: o5fKIqH7Zk
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
import * as sty from "./PlasmicAntdFormUpload.module.css"; // plasmic-import: o5fKIqH7Zk/css

export type PlasmicAntdFormUpload__VariantMembers = {};

export type PlasmicAntdFormUpload__VariantsArgs = {};
type VariantPropType = keyof PlasmicAntdFormUpload__VariantsArgs;
export const PlasmicAntdFormUpload__VariantProps = new Array<VariantPropType>();

export type PlasmicAntdFormUpload__ArgsType = {};
type ArgPropType = keyof PlasmicAntdFormUpload__ArgsType;
export const PlasmicAntdFormUpload__ArgProps = new Array<ArgPropType>();

export type PlasmicAntdFormUpload__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAntdFormUploadProps {
  className?: string;
}

function PlasmicAntdFormUpload__RenderFunc(props: {
  variants: PlasmicAntdFormUpload__VariantsArgs;
  args: PlasmicAntdFormUpload__ArgsType;
  overrides: PlasmicAntdFormUpload__OverridesType;
  dataFetches?: PlasmicAntdFormUpload__Fetches;
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
  PlasmicAntdFormUpload__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAntdFormUpload__VariantsArgs;
    args?: PlasmicAntdFormUpload__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAntdFormUpload__Fetches;
  } & Omit<PlasmicAntdFormUpload__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAntdFormUpload__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAntdFormUpload__ArgProps,
      internalVariantPropNames: PlasmicAntdFormUpload__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAntdFormUpload__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAntdFormUpload";
  } else {
    func.displayName = `PlasmicAntdFormUpload.${nodeName}`;
  }
  return func;
}

export const PlasmicAntdFormUpload = Object.assign(
  // Top-level PlasmicAntdFormUpload renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAntdFormUpload
    internalVariantProps: PlasmicAntdFormUpload__VariantProps,
    internalArgProps: PlasmicAntdFormUpload__ArgProps
  }
);

export default PlasmicAntdFormUpload;
/* prettier-ignore-end */