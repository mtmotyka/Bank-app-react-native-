import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width - 150;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.spentValue}>{item.amount}</Text>
      <Text style={styles.spentBottomText}>
        of <Text style={styles.boldedText}>{item.amountOf}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: ITEM_WIDTH,
  },
  spentValue: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#042C5C",
    marginBottom: 5,
  },

  spentBottomText: {
    fontSize: 13,
    textAlign: "center",
    color: "#77869E",
  },

  boldedText: {
    color: "#77869E",
    fontFamily: "AvenirBlack",
  },
});

export default CarouselCardItem;
