import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Navigation } from "@/flow/Navigtion";

export const NavigationStack: React.FC = (): React.ReactNode &
  React.JSX.Element => (
  <NavigationContainer theme={DarkTheme}>
    <Navigation />
  </NavigationContainer>
);
