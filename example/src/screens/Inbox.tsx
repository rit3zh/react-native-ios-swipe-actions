import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { List, Section } from "react-native-swift-components";
import { Text } from "swiftui-react-native";
import { EMAILS, SwipeActionsOptions } from "@/constants/index";

// @ts-check
import { ListSection } from "@/components/index";
import { iMail } from "@/types";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const Inbox = (props: NativeStackHeaderProps) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
      },
    });
  }, [props.navigation]);

  const [emails, setEmails] = useState<iMail[]>(EMAILS);
  const onActionClick = (index: number, title?: string) => {
    const updatedEmails = [...emails];
    const removeElement = updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
    console.log(removeElement, "remove");
  };

  return (
    <React.Fragment>
      {/* <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
        }}
      > */}
      <List
        scrollDisabled={false}
        listStyle="inset"
        onActionClick={onActionClick}
        {...SwipeActionsOptions}
        style={styles.listContainer}
      >
        <Section>
          {emails.map((value, index) => (
            <ListSection key={`${index}_`} data={value} />
          ))}
        </Section>
      </List>
    </React.Fragment>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    bottom: 38,
  },
});
