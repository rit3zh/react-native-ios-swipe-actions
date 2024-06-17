// @ts-check
import { NavigationStack } from "@/stack/index";
import { InitializeTheme } from "@/initializer/index";
import { Theme } from "@/constants/index";

InitializeTheme(Theme.Dark);

// @ts-ignore
const App: React.FunctionComponent = (): React.ReactNode => {
  return <NavigationStack />;
};

export default App;
