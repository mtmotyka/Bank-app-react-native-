import React, { useState, useCallback, useRef } from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(spentData);
  const ref = useRef(null);
  const spentData = [
    {
      id: 1,
      amount: "$6,390",
      amountOf: "$3.248",
    },
    {
      id: 2,
      amount: "$21,370",
      amountOf: "$43.123",
    },
    {
      id: 3,
      amount: "$38",
      amountOf: "$50",
    },
  ];

  const renderItem = useCallback(
    ({ item, index }) => (
      <View>
        <Text>{item.amount}</Text>
        <Text>{item.amountOf}</Text>
      </View>
    ),
    []
  );
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/home-bg.png")}
        style={styles.bgImage}
      />
      <View style={styles.mainView}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Your Budgets</Text>
          <Icon name="notifications" size={22} color="#fff" />
        </View>
        <View style={styles.spentContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              for <Text style={styles.boldedText}>Axess Platinum</Text> Card
            </Text>
            <Text style={styles.addBudgetButton}>Add Budget</Text>
          </View>
          <View style={styles.spentCarouselContainer}>
            <Carousel
              layout="default"
              ref={ref}
              data={spentData}
              sliderWidth={300}
              itemWidth={300}
              renderItem={renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 25,
    paddingTop: 80,
  },

  bgImage: {
    height: 350,
    width: "100%",
    borderBottomRightRadius: 50,
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
  },

  headerContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Avenir",
  },

  spentContainer: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  cardTitle: {
    color: "#77869E",
    fontSize: 13,
  },

  boldedText: {
    color: "#042C5C",
    fontWeight: "900",
  },

  addBudgetButton: {
    color: "#0047CC",
    fontSize: 13,
    fontWeight: "900",
  },

  spentCarouselContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default HomeScreen;
