import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Color, Modifiers, NativeModifiersProp } from "../utils/modifiers";
import { SystemName } from "../Image/types";

export type NativeDiscloserGroupProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  style?: StyleProp<ViewStyle>;
  titles?: Titles[];
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
};

export type ListProps = {
  style?: StyleProp<ViewStyle>;
  titles?: Titles[];
  children?: React.ReactNode | ReactElement[];
} & Modifiers;

export type Titles = {
  title: string;
  icon?: SystemName;
  titleColor?: Color;
  iconColor?: Color;
};
