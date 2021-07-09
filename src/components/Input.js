import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const Input = ({
  label,
  mode,
  placeholderColor,
  textColor,
  underlineColor,
  backgroundColor,
  secureTextEntry,
}) => {
  const [username, setUsername] = useState("");
  return (
    <View style={styles.wrapper}>
      <TextInput
        label={label}
        value={username}
        onChangeText={(username) => setUsername(username)}
        mode={mode}
        theme={{
          colors: {
            placeholder: { placeholderColor },
            text: { textColor },
            primary: "#2AD95A",
            underlineColor: { underlineColor },
            background: `${backgroundColor}`,
          },
        }}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    marginBottom: 25,
  },

  label: {
    fontSize: 13,
    color: "#77869E",
    position: "absolute",
    left: 0,
    bottom: 5,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 0,
  },
});

export default Input;
