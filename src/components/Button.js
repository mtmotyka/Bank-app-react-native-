import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: "#0047CC",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Button;
