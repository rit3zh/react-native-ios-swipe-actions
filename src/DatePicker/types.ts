import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Binding } from "../utils/binding";
import { Modifiers, NativeModifiersProp } from "../utils/modifiers";
import { SystemName } from "../Image/types";

export type DatePickerNativeProps = {
  selection: string;
  displayedComponents?: string[];
  modifiers?: NativeModifiersProp;
  title?: string;
  startComponent?: DateComponent;
  endComponent?: DateComponent;
  style?: StyleProp<ViewStyle>;
  onEvent?: (e: NativeSyntheticEvent<{ [key: string]: any }>) => void;
};

export type DatePickerProps = {
  selection: Date | Binding<Date>;
  displayedComponents?: DateFormat[];
  startComponent?: DateComponent;
  endComponent?: DateComponent;
  onChange?: (date: Date) => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
} & Modifiers;

export type DateFormat = "date" | "hourAndMinute";

export type DateComponent = {
  year: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
};
