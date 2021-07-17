import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ScreenHeading = ({ children, icon, style }) => {
  return (
    <View style={styles.screenHeading}>
      <Text style={styles.screenTitle} icon={icon}>
        {children}
      </Text>
      <Icon name={icon} size={30} color="#0047CC" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  screenTitle: {
    fontSize: 20,
    color: "#042C5C",
    fontFamily: "AvenirHeavy",
    fontWeight: "900",
    marginBottom: 10,
  },
});

export default ScreenHeading;
