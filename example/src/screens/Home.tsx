import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { BottomToolBar } from "@/components/index";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const Home = (props: NativeStackHeaderProps) => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <TouchableOpacity
        onPress={() => props.navigation.navigate("InboxScreen")}
      >
        <Text style={{ color: "white" }}>Navigate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
