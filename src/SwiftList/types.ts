import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Modifiers, NativeModifiersProp, Color } from "../utils/modifiers";

export type NativeSwiftListProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  style?: StyleProp<ViewStyle>;
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
};

export type SwiftListProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | ReactElement[];
} & Modifiers;
