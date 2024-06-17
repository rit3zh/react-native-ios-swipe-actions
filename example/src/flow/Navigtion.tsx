import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/Home";
import ChatScreen from "@/screens/Chats";
import InboxScreen from "@/screens/Inbox";

import { InboxScreenOptions } from "@/constants/index";
import { Text } from "swiftui-react-native";
const { Navigator, Screen } = createNativeStackNavigator();

export const Navigation: React.FC = (): React.ReactNode & React.JSX.Element => (
  <Navigator>
    <Screen
      name="HomeScreen"
      component={HomeScreen as any}
      options={{ headerTitle: "Mailboxes" }}
    />
    <Screen
      name="InboxScreen"
      component={InboxScreen as any}
      options={{
        ...InboxScreenOptions,
        headerRight: () => <Text foregroundStyle="blue">Edit</Text>,
      }}
    />
    <Screen name="ChatScreen" component={ChatScreen} />
  </Navigator>
);
