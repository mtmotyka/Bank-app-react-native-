import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const SectionHeading = ({ children }) => {
  let [fontsLoaded] = useFonts({
    AvenirHeavy: require("../assets/fonts/AvenirLTStd-Heavy.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Font loading...</Text>;
  } else {
    return <Text style={styles.sectionHeading}>{children}</Text>;
  }
};

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 20,
    color: "#042C5C",
    fontFamily: "AvenirHeavy",
    fontWeight: "900",
    marginBottom: 10,
  },
});

export default SectionHeading;
