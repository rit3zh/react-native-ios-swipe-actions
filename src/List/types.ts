import { ReactElement } from "react";
import { NativeSyntheticEvent, StyleProp, ViewStyle } from "react-native";
import { Modifiers, NativeModifiersProp, Color } from "../utils/modifiers";
import { SystemName } from "../Image/types";

export type NativeListProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  leadingSwipeActions?: SwipeActions[];
  trailingSwipeActions?: SwipeActions[];
  leadingFullSwipeDestructive?: boolean;
  trailingFullSwipeDestructive?: boolean;
  leadingFullSwipeEnabled?: boolean;
  trailingFullSwipeEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onEvent?: (
    e: NativeSyntheticEvent<{
      [key: string]: any;
    }>
  ) => void;
};

export type ListProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | ReactElement[];
  leadingSwipeActions?: SwipeActions[];
  trailingSwipeActions?: SwipeActions[];
  leadingFullSwipeDestructive?: boolean;
  trailingFullSwipeDestructive?: boolean;
  leadingFullSwipeEnabled?: boolean;
  onActionClick?: (index: number, title?: string) => any;
  trailingFullSwipeEnabled?: boolean;
} & Modifiers;

export type SwipeActions = {
  title?: string;
  icon?: SystemName;
  tint?: Color;
};

export type { SystemName };
