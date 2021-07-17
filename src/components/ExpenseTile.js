import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { BoxShadow } from "react-native-shadow";

const width = Dimensions.get("window").width - 50;

const ExpenseTile = ({ shopName, date, icon, type, amount }) => {
  const tileShadow = {
    width: width,
    height: 70,
    color: "#000",
    border: 3,
    radius: 3,
    opacity: 0.02,
    x: 0,
    y: 3,
    style: { marginVertical: 7 },
  };
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
      <BoxShadow setting={tileShadow}>
        <View style={styles.expenseTile}>
          <View
            style={[
              styles.iconContainer,
              type === "income"
                ? styles.iconContainerGreen
                : styles.iconContainerRed,
            ]}
          >
            {icon}
          </View>
          <View>
            <Text style={styles.shopName}>{shopName}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text
            style={
              type === "income" ? styles.incomeAmount : styles.expenseAmount
            }
          >
            {type === "income" ? "+" : "-"} ${amount}
          </Text>
        </View>
      </BoxShadow>
    );
  }
};

const styles = StyleSheet.create({
  expenseTile: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width,
    height: 70,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  iconContainerRed: {
    backgroundColor: "#FF7E87",
  },

  iconContainerGreen: {
    backgroundColor: "#4DF1A1",
  },

  shopName: {
    fontSize: 16,
    fontFamily: "AvenirHeavy",
    color: "#042C5C",
  },

  date: {
    color: "#77869E",
    fontSize: 13,
    fontFamily: "Avenir",
  },

  expenseAmount: {
    marginRight: 0,
    marginLeft: "auto",
    color: "#EE5A55",
    fontSize: 16,
    fontFamily: "AvenirHeavy",
  },

  incomeAmount: {
    marginRight: 0,
    marginLeft: "auto",
    color: "#00D793",
    fontSize: 16,
    fontFamily: "AvenirHeavy",
  },
});

export default ExpenseTile;
