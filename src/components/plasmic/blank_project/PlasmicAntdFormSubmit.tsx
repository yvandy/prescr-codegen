// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJSLnzQiU882Sm76eQ6ECs
// Component: P0m14OaWFw
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
import * as sty from "./PlasmicAntdFormSubmit.module.css"; // plasmic-import: P0m14OaWFw/css

export type PlasmicAntdFormSubmit__VariantMembers = {};

export type PlasmicAntdFormSubmit__VariantsArgs = {};
type VariantPropType = keyof PlasmicAntdFormSubmit__VariantsArgs;
export const PlasmicAntdFormSubmit__VariantProps = new Array<VariantPropType>();

export type PlasmicAntdFormSubmit__ArgsType = {};
type ArgPropType = keyof PlasmicAntdFormSubmit__ArgsType;
export const PlasmicAntdFormSubmit__ArgProps = new Array<ArgPropType>();

export type PlasmicAntdFormSubmit__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAntdFormSubmitProps {
  className?: string;
}

function PlasmicAntdFormSubmit__RenderFunc(props: {
  variants: PlasmicAntdFormSubmit__VariantsArgs;
  args: PlasmicAntdFormSubmit__ArgsType;
  overrides: PlasmicAntdFormSubmit__OverridesType;
  dataFetches?: PlasmicAntdFormSubmit__Fetches;
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
  PlasmicAntdFormSubmit__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAntdFormSubmit__VariantsArgs;
    args?: PlasmicAntdFormSubmit__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAntdFormSubmit__Fetches;
  } & Omit<PlasmicAntdFormSubmit__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAntdFormSubmit__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAntdFormSubmit__ArgProps,
      internalVariantPropNames: PlasmicAntdFormSubmit__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAntdFormSubmit__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAntdFormSubmit";
  } else {
    func.displayName = `PlasmicAntdFormSubmit.${nodeName}`;
  }
  return func;
}

export const PlasmicAntdFormSubmit = Object.assign(
  // Top-level PlasmicAntdFormSubmit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAntdFormSubmit
    internalVariantProps: PlasmicAntdFormSubmit__VariantProps,
    internalArgProps: PlasmicAntdFormSubmit__ArgProps
  }
);

export default PlasmicAntdFormSubmit;
/* prettier-ignore-end */
