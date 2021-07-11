import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import CarouselPagination from "../components/CarouselPagination";

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

const HomeScreen = () => {
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
          <Image
            source={require("../../assets/images/credit-card.png")}
            width={28}
            height={24}
          />
          <Text style={styles.carouselTitle}>You Are Spent</Text>
          <View style={styles.spentCarouselContainer}>
            <SwiperFlatList
              index={2}
              showPagination
              PaginationComponent={CarouselPagination}
              data={spentData}
              renderItem={({ item }) => (
                <View
                  style={[styles.spentCarouselItem, { backgroundColor: item }]}
                >
                  <Text style={styles.spentAmount}>{item.amount}</Text>
                  <Text style={styles.spentAmountOf}>of {item.amountOf}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
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
    marginBottom: 25,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
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
    backgroundColor: "white",
  },

  spentCarouselItem: {
    width,
    justifyContent: "flex-start",
    marginLeft: -43,
    height: 100,
  },

  spentAmount: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#042C5C",
    marginBottom: 5,
  },

  spentAmountOf: {
    fontSize: 13,
    textAlign: "center",
    color: "#77869E",
  },

  carouselTitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#77869E",
    marginBottom: 10,
    fontWeight: "600",
    marginTop: 20,
  },
});

export default HomeScreen;
