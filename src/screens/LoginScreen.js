import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";
import Input from "../components/Input";
import { Checkbox } from "react-native-paper";
import Button from "../components/Button";

const LoginScreen = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainView}>
      <Text style={styles.loginText}>Welcome Login</Text>
      <Input
        label="Username"
        mode="flat"
        color="#042C5C"
        backgroundColor="transparent"
        placeholderColor="#77869E"
        textColor="#042C5C"
        underlineColor="#2AD95A"
      />
      <Input
        label="Password"
        mode="flat"
        color="#042C5C"
        backgroundColor="transparent"
        placeholderColor="#77869E"
        textColor="#042C5C"
        underlineColor="#2AD95A"
        secureTextEntry={true}
      />
      <Checkbox.Item
        label="Remember me"
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#2AD95A"
        uncheckedColor="#77869E"
        style={styles.checkbox}
      />
      <Button />
      <Text style={styles.accountText}>
        Don't have a account?{" "}
        <TouchableOpacity style={styles.signUpText}>Sign up</TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 25,
    paddingTop: 100,
  },

  loginText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#042C5C",
  },

  checkbox: {
    paddingHorizontal: 0,
    marginBottom: 25,
  },

  accountText: {
    color: "#77869E",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },

  signUpText: {
    color: "#042C5C",
    fontWeight: "700",
  },
});

export default LoginScreen;
