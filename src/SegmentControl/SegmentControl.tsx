import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { getValueOrBinding } from "../utils/binding";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { NativePickerProps, PickerProps } from "./types";
import { SystemName } from "../Image/types";

const NativeView: React.ComponentType<NativePickerProps> =
  requireNativeViewManager("SegmentControl");

export function Picker<T>({
  selection,
  style,
  onChange,
  values,
  ...modifiers
}: PickerProps<T>) {
  const defaultSize = {
    wheel: { width: 300, height: 100 },
    menu: { width: 100, height: 35 },
    segmented: { width: 300, height: 35 },
  };

  return (
    <NativeView
      options={values.map((v) => ({
        label: v.label,
        ...(v.image ? { image: v.image } : { image: false }),
      }))}
      selection={getValueOrBinding(selection)}
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        ...getSizeFromModifiers(
          modifiers,
          defaultSize[modifiers.pickerStyle || "segmented"]
        ),
        ...(style as any),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers, {
          onValueChange(e) {
            if (typeof selection === "object" && "setValue" in selection) {
              selection.setValue(e?.nativeEvent.onValueChange);
            }
            onChange?.(e?.nativeEvent.onValueChange.value);
          },
        });
      }}
    />
  );
}
