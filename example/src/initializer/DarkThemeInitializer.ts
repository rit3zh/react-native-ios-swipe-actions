import { Theme } from "@/constants";
import { Appearance } from "react-native";

export const InitializeTheme = (theme: Theme) =>
  Appearance.setColorScheme(theme);
