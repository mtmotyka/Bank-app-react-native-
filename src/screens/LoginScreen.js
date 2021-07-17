import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { Checkbox } from "react-native-paper";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [checked, setChecked] = useState(false);
  let [fontsLoaded] = useFonts({
    Avenir: require("../assets/fonts/AvenirLTStd-Roman.ttf"),
    AvenirMedium: require("../assets/fonts/AvenirLTStd-Medium.ttf"),
    AvenirBlack: require("../assets/fonts/AvenirLTStd-Black.ttf"),
    AvenirHeavy: require("../assets/fonts/AvenirLTStd-Heavy.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Font loading...</Text>;
  } else {
    return (
      <View style={styles.mainView}>
        <Text style={styles.loginText}>Welcome Login</Text>
        <View style={styles.socialsButtonsContainer}>
          <TouchableOpacity style={styles.socialLoginBtn}>
            <Icon name="logo-facebook" size={22} color="#77869E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginBtn}>
            <Icon name="logo-google" size={22} color="#77869E" />
          </TouchableOpacity>
        </View>
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
          uncheckedColor="#042C5C"
          style={styles.checkbox}
        />
        <Button />
        <Text style={styles.accountText}>
          Don't have a account?{" "}
          <TouchableOpacity style={styles.signUpText}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
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
    marginBottom: 50,
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
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  signUpText: {
    color: "#042C5C",
    fontWeight: "700",
    fontSize: 16,
  },

  socialsButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  socialLoginBtn: {
    borderWidth: 1,
    borderColor: "rgba(119, 134, 158, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: "48%",
  },
});

export default LoginScreen;
