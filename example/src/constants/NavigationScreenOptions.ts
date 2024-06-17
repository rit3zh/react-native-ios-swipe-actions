import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const InboxScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: "Inbox",
  headerLargeTitle: true,

  headerTransparent: true,

  headerBlurEffect: "systemChromeMaterialDark",
  headerLargeStyle: {
    backgroundColor: "black",
  },
};
