import { NativeSyntheticEvent } from "react-native";
import { Modifiers } from "./modifiers";

export function onBaseEvent(
  e: NativeSyntheticEvent<{ [key: string]: any }>,
  modifiers: Modifiers,
  extraEvents?: {
    [key: string]: (e?: NativeSyntheticEvent<{ [key: string]: any }>) => void;
  }
) {
  const eventName = Object.keys(e.nativeEvent).filter((key) =>
    key.startsWith("on")
  )[0];
  switch (eventName) {
    case "onAppear":
      modifiers.onAppear?.();
      break;
    case "onDisappear":
      modifiers.onDisappear?.();
      break;
  }

  if (extraEvents && extraEvents[eventName]) {
    extraEvents[eventName](e);
  }
}
