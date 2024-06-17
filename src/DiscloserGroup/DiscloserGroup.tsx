import { requireNativeViewManager } from "expo-modules-core";
import React, { ReactElement } from "react";
import { View, useWindowDimensions } from "react-native";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { ListProps, NativeDiscloserGroupProps } from "./types";

const DiscloserGroupNative: React.ComponentType<NativeDiscloserGroupProps> =
  requireNativeViewManager("DiscloserGroup");
export function DiscloserGroup<T>({
  style,
  children,
  titles,
  ...modifiers
}: ListProps) {
  const { width } = useWindowDimensions();
  let rowWidth = width;

  return (
    <DiscloserGroupNative
      titles={titles}
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
      {React.Children.map(children as any, (child: ReactElement) => {
        return (
          <View
            style={{
              width: rowWidth - 50,
            }}
          >
            {child}
          </View>
        );
      })}
    </DiscloserGroupNative>
  );
}
