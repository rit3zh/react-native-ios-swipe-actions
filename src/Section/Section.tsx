import { requireNativeViewManager } from "expo-modules-core";
import React from "react";
import { useWindowDimensions } from "react-native";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { NativeSectionProps, SectionProps } from "./types";

const NativeSection: React.ComponentType<NativeSectionProps> =
  requireNativeViewManager("SwipeSectionView");

export function Section({
  style,
  children,
  header,
  footer,
  ...modifiers
}: SectionProps) {
  const { width } = useWindowDimensions();

  return (
    <NativeSection
      modifiers={mapToNativeModifiers(modifiers)}
      header={header}
      footer={footer}
      style={{
        ...getSizeFromModifiers(modifiers),
        ...(style as object),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers);
      }}
    >
      {children}
    </NativeSection>
  );
}
