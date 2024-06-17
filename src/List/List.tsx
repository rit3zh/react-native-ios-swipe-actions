import { requireNativeViewManager } from "expo-modules-core";
import React, { ReactElement } from "react";
import { View, useWindowDimensions } from "react-native";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { ListProps, NativeListProps } from "./types";

const NativeList: React.ComponentType<NativeListProps> =
  requireNativeViewManager("SwipeList");

export function List<T>({ style, children, ...modifiers }: ListProps) {
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
          height: 500 as any,
        }),
        ...(style as object),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers, {
          onActionClick(_) {
            const index = _?.nativeEvent.onActionClick.indices;
            const title = _?.nativeEvent.onActionClick.title;
            modifiers.onActionClick?.(index, title);
          },
        });
      }}
      trailingFullSwipeDestructive={modifiers.trailingFullSwipeDestructive}
      trailingFullSwipeEnabled={modifiers.trailingFullSwipeEnabled}
      trailingSwipeActions={modifiers.trailingSwipeActions}
      leadingFullSwipeDestructive={modifiers.leadingFullSwipeDestructive}
      leadingFullSwipeEnabled={modifiers.leadingFullSwipeEnabled}
      leadingSwipeActions={modifiers.leadingSwipeActions}
    >
      {React.Children.map(children as any, (child: ReactElement) => {
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
