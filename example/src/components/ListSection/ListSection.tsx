import { StyleSheet, View, Text as NativeText, Dimensions } from "react-native";
import React from "react";
import { iMail } from "@/types";
import {
  HStack,
  Rectangle,
  RoundedRectangle,
  VStack,
  ZStack,
  Text,
  Spacer,
  Label,
  Image,
  Circle,
} from "swiftui-react-native";

const { width } = Dimensions.get("window");

interface Props {
  data: iMail;
}

export const ListSection: React.FC<Props> = ({
  data,
}: Props): React.ReactNode => {
  const { companyName, date, description, title, isDot } = data;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <ZStack alignment="leading">
          {isDot !== false ? (
            <Circle fill="blue" frame={styles.frame} style={styles.dot} />
          ) : null}
          <View style={styles.wrapper}>
            <NativeText style={styles.title}>{companyName}</NativeText>
            <View style={styles.sideContent}>
              <NativeText style={styles.date}>{date}</NativeText>
              <Image
                systemName="chevron.forward"
                foregroundStyle={"gray"}
                fontSize={13}
                bold
              />
            </View>
          </View>
        </ZStack>
        <NativeText style={styles.subtitle}>{title}</NativeText>

        <NativeText style={styles.description} numberOfLines={2}>
          {description}
        </NativeText>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginLeft: 10,
  },
  dot: {
    right: 6,
    position: "absolute",
  },
  frame: {
    width: 8.5,
    height: 8.5,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 20,
  },
  description: {
    color: "gray",
    maxWidth: 450,
    bottom: 1,
    paddingLeft: 5,
  },
  sideContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  date: {
    color: "#9b9b9b",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  subtitle: {
    color: "white",
    bottom: 6,
    paddingLeft: 5,
  },
  titleText: {
    right: 3,
  },
});
