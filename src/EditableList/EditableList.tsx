import { requireNativeViewManager } from "expo-modules-core";
import React, { ReactElement } from "react";
import { View, useWindowDimensions } from "react-native";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { ListProps, NativeListProps } from "./types";

const NativeList: React.ComponentType<NativeListProps> =
  requireNativeViewManager("EditableList");

export function EditableList<T>({
  editingEnabled,
  style,
  children,
  onDelete,
  onMove,
  ...modifiers
}: ListProps) {
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
      editingEnabled={editingEnabled}
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        ...getSizeFromModifiers(modifiers, {
          width: "100%" as any,
          height: 500,
        }),
        ...(style as object),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers, {
          onMove(e) {
            const newValue = e?.nativeEvent.onMove;
            const index = newValue.indices;
            const to = newValue.destination;
            onMove?.(Number(index), Number(to));
          },
          onDelete(e) {
            const newValue = e?.nativeEvent.onDelete;
            const index = newValue.indices;
            onDelete?.(Number(index));
          },
        });
      }}
    >
      {React.Children.map(children as any, (child: ReactElement) => {
        return (
          <View
            style={{
              width: rowWidth - 100,
            }}
          >
            {child}
          </View>
        );
      })}
    </NativeList>
  );
}
