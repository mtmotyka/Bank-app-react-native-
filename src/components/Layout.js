import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

const Layout = ({ children }) => {
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
      <ScrollView>
        <View style={styles.mainView}>{children}</View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 100,
  },
});

export default Layout;
