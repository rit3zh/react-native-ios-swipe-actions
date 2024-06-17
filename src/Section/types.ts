import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Modifiers, NativeModifiersProp } from "../utils/modifiers";

export type NativeSectionProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  header?: string;
  footer?: string;
  style?: StyleProp<ViewStyle>;
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
};

export type SectionProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | ReactElement[];
  header?: string;
  footer?: string;
} & Modifiers;
