import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export function BottomToolBar() {
  return (
    <BlurView style={styles.container}>
      <Text style={styles.text}>BottomToolBar</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
