// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJSLnzQiU882Sm76eQ6ECs
// Component: jwRy-bXo-6
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
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: bJSLnzQiU882Sm76eQ6ECs/projectcss
import * as sty from "./PlasmicAntdTestComp.module.css"; // plasmic-import: jwRy-bXo-6/css

export type PlasmicAntdTestComp__VariantMembers = {};

export type PlasmicAntdTestComp__VariantsArgs = {};
type VariantPropType = keyof PlasmicAntdTestComp__VariantsArgs;
export const PlasmicAntdTestComp__VariantProps = new Array<VariantPropType>();

export type PlasmicAntdTestComp__ArgsType = {};
type ArgPropType = keyof PlasmicAntdTestComp__ArgsType;
export const PlasmicAntdTestComp__ArgProps = new Array<ArgPropType>();

export type PlasmicAntdTestComp__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAntdTestCompProps {
  className?: string;
}

function PlasmicAntdTestComp__RenderFunc(props: {
  variants: PlasmicAntdTestComp__VariantsArgs;
  args: PlasmicAntdTestComp__ArgsType;
  overrides: PlasmicAntdTestComp__OverridesType;
  dataFetches?: PlasmicAntdTestComp__Fetches;
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
  PlasmicAntdTestComp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAntdTestComp__VariantsArgs;
    args?: PlasmicAntdTestComp__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAntdTestComp__Fetches;
  } & Omit<PlasmicAntdTestComp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAntdTestComp__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAntdTestComp__ArgProps,
      internalVariantPropNames: PlasmicAntdTestComp__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAntdTestComp__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAntdTestComp";
  } else {
    func.displayName = `PlasmicAntdTestComp.${nodeName}`;
  }
  return func;
}

export const PlasmicAntdTestComp = Object.assign(
  // Top-level PlasmicAntdTestComp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAntdTestComp
    internalVariantProps: PlasmicAntdTestComp__VariantProps,
    internalArgProps: PlasmicAntdTestComp__ArgProps
  }
);

export default PlasmicAntdTestComp;
/* prettier-ignore-end */
