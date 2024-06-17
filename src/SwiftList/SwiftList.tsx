import { requireNativeViewManager } from "expo-modules-core";
import React, { ReactElement } from "react";
import { View, useWindowDimensions } from "react-native";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { NativeSwiftListProps, SwiftListProps } from "./types";

const NativeList: React.ComponentType<NativeSwiftListProps> =
  requireNativeViewManager("SwiftList");

export function SwiftList<T>({
  style,
  children,
  ...modifiers
}: SwiftListProps) {
  const { width } = useWindowDimensions();
  let rowWidth = width;
  switch (modifiers.listStyle || "insetGrouped") {
    default:
    case "insetGrouped":
      rowWidth = width - 80;
      break;
    case "inset":
    case "grouped":
    case "plain":
      rowWidth = width - 40;
      break;
  }

  return (
    <NativeList
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        ...getSizeFromModifiers(modifiers, {
          width: "100%" as any,
          height: 500,
        }),
        ...(style as object),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers);
      }}
    >
      {React.Children?.map(children as any, (child: ReactElement) => {
        return (
          <View
            style={{
              width: rowWidth,
            }}
          >
            {child}
          </View>
        );
      })}
    </NativeList>
  );
}
