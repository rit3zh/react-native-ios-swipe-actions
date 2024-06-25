import { View, Text, SafeAreaView, Appearance, ScrollView } from "react-native";
import React from "react";
import { List, NativeListProps } from "react-native-ios-swipe-actions";

Appearance.setColorScheme("dark");
export default function App() {
  const numbers = Array.from({ length: 101 }, (_, index) => index);

  const SwipeActionsOptions: NativeListProps = {
    leadingFullSwipeEnabled: true,
    leadingFullSwipeDestructive: false,
    leadingSwipeActions: [
      {
        title: "Read",
        icon: "envelope.open.fill",
        tint: "#2f89ff",
      },
      {
        title: "Remind Me",
        icon: "clock.fill",
        tint: "#5d5be6",
      },
    ],
    trailingFullSwipeDestructive: true,
    trailingFullSwipeEnabled: true,
    trailingSwipeActions: [
      {
        title: "Archive",
        icon: "archivebox.fill",
        tint: "#bf5bf2",
      },
      {
        title: "Flag",
        icon: "flag.fill",
        tint: "#fe9d0a",
      },
      {
        title: "More",
        icon: "ellipsis.circle.fill",
        tint: "a4a3a4",
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "white" }}>Hell</Text>
        </View>

        <List
          style={{
            flexGrow: 1,
          }}
          listStyle="plain"
          scrollDisabled={false}
          ignoresSafeArea={true}
          {...SwipeActionsOptions}
          onActionClick={(index, title) => console.log(index, title)}
        >
          {[...numbers].map((v, i) => (
            <View
              key={`${i}_`}
              style={{
                width: 70,
                height: 70,
                backgroundColor: "red",
                marginLeft: 30,
              }}
            >
              <Text style={{ color: "white" }}>{v}</Text>
            </View>
          ))}
        </List>
      </SafeAreaView>
    </ScrollView>
  );
}
