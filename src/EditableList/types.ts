import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Modifiers, NativeModifiersProp, Color } from "../utils/modifiers";

export type NativeListProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  editingEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onDelete?: () => any;
  onMove?: () => any;
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
};

export type ListProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | ReactElement[];
  editingEnabled?: boolean;
  onDelete?: (index: number) => any;
  onMove?: (index?: number, to?: number) => any;
} & Modifiers;
