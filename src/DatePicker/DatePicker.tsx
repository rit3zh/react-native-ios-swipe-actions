import { requireNativeViewManager } from "expo-modules-core";
import React from "react";
import { getValueOrBinding } from "../utils/binding";
import { getSizeFromModifiers, mapToNativeModifiers } from "../utils/modifiers";
import { onBaseEvent } from "../utils/baseEvents";
import { DatePickerProps, DatePickerNativeProps } from "./types";

const NativeDatePicker: React.ComponentType<DatePickerNativeProps> =
  requireNativeViewManager("DatePicker");

export function DatePicker({
  selection,
  displayedComponents,
  style,
  onChange,
  title,
  startComponent,
  endComponent,
  ...modifiers
}: DatePickerProps) {
  return (
    <NativeDatePicker
      selection={getValueOrBinding(selection).toISOString()}
      modifiers={mapToNativeModifiers(modifiers)}
      startComponent={
        !startComponent
          ? undefined
          : {
              year: startComponent.year ?? 2010,
              month: startComponent.month,
              day: startComponent.day,
              hour: startComponent.hour,
              minute: startComponent.minute,
              second: startComponent.second,
            }
      }
      endComponent={
        !startComponent
          ? undefined
          : {
              year: endComponent?.year ?? new Date().getFullYear(),
              month: endComponent?.month,
              day: endComponent?.day,
              hour: endComponent?.hour,
              minute: endComponent?.minute,
              second: endComponent?.second,
            }
      }
      title={title}
      displayedComponents={displayedComponents}
      style={{
        ...getSizeFromModifiers(modifiers, { width: 300, height: 300 }),
        ...(style as object),
      }}
      onEvent={(e) => {
        onBaseEvent(e, modifiers, {
          onValueChange(e) {
            const newDate = new Date(e?.nativeEvent.onValueChange);
            if (typeof selection === "object" && "setValue" in selection) {
              selection.setValue(newDate);
            }
            onChange?.(newDate);
          },
        });
      }}
    />
  );
}
