import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Binding } from "../utils/binding";
import { Modifiers, NativeModifiersProp } from "../utils/modifiers";
import { SystemName } from "../Image/types";

export type NativePickerProps = {
  selection: number;
  options: any[];
  modifiers?: NativeModifiersProp;
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
  style?: StyleProp<ViewStyle>;
};

export type PickerProps<T> = {
  values: Values<T>[];
  selection: Binding<number> | number;
  onChange?: (newValue: string) => void;
  style?: StyleProp<ViewStyle>;
} & Modifiers;

export interface Values<T> {
  label: T | SystemName;
  image?: boolean;
}
