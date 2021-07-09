import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>Login</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: Roboto_400Regular,
    textAlign: "center",
    backgroundColor: "#0047CC",
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default Button;
