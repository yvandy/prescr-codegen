// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bJSLnzQiU882Sm76eQ6ECs
// Component: uLTPE-ZqPg
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
import * as sty from "./PlasmicAntFormLabel.module.css"; // plasmic-import: uLTPE-ZqPg/css

export type PlasmicAntFormLabel__VariantMembers = {};

export type PlasmicAntFormLabel__VariantsArgs = {};
type VariantPropType = keyof PlasmicAntFormLabel__VariantsArgs;
export const PlasmicAntFormLabel__VariantProps = new Array<VariantPropType>();

export type PlasmicAntFormLabel__ArgsType = {};
type ArgPropType = keyof PlasmicAntFormLabel__ArgsType;
export const PlasmicAntFormLabel__ArgProps = new Array<ArgPropType>();

export type PlasmicAntFormLabel__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAntFormLabelProps {
  className?: string;
}

function PlasmicAntFormLabel__RenderFunc(props: {
  variants: PlasmicAntFormLabel__VariantsArgs;
  args: PlasmicAntFormLabel__ArgsType;
  overrides: PlasmicAntFormLabel__OverridesType;
  dataFetches?: PlasmicAntFormLabel__Fetches;
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
  PlasmicAntFormLabel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAntFormLabel__VariantsArgs;
    args?: PlasmicAntFormLabel__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAntFormLabel__Fetches;
  } & Omit<PlasmicAntFormLabel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAntFormLabel__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAntFormLabel__ArgProps,
      internalVariantPropNames: PlasmicAntFormLabel__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAntFormLabel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAntFormLabel";
  } else {
    func.displayName = `PlasmicAntFormLabel.${nodeName}`;
  }
  return func;
}

export const PlasmicAntFormLabel = Object.assign(
  // Top-level PlasmicAntFormLabel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAntFormLabel
    internalVariantProps: PlasmicAntFormLabel__VariantProps,
    internalArgProps: PlasmicAntFormLabel__ArgProps
  }
);

export default PlasmicAntFormLabel;
/* prettier-ignore-end */
