import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "../components/Carousel";
import SectionHeading from "../components/SectionHeading";
import ExpenseTile from "../components/ExpenseTile";
import Layout from "../components/Layout";

const HomeScreen = () => {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/home-bg.png")}
        style={styles.bgImage}
      />
      <Layout>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Your Budgets</Text>
          <Icon name="notifications" size={22} color="#fff" />
        </View>
        <View style={styles.spentContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              for <Text style={styles.boldedText}>Axess Platinum</Text> Card
            </Text>
            <Text style={styles.addBudgetButton}>+ Add Budget</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/images/credit-card.png")}
              width={28}
              height={24}
              style={styles.creditCardImg}
            />
          </View>
          <Text style={styles.carouselTitle}>You Are Spent</Text>
          <View style={styles.carouselContainer}>
            <Image
              source={require("../assets/images/chart-elipse.png")}
              width={262}
              height={180}
              style={styles.chartElipse}
            />
            <Carousel />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.blueButton}>
            <Icon name="cash-outline" size={21} color="#0047CC" />
            <Text style={styles.buttonText}>Send Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton}>
            <Icon name="calculator-outline" size={21} color="#0047CC" />
            <Text style={styles.buttonText}>Calculation</Text>
          </TouchableOpacity>
        </View>
        <View>
          <SectionHeading>Transactions</SectionHeading>
          <View>
            <ExpenseTile
              type="expense"
              shopName="Shell"
              date="17 Monday June"
              amount={35.88}
              icon={<Icon name="car-outline" size={22} color="#fff" />}
            />
            <ExpenseTile
              type="expense"
              shopName="Amazon"
              date="22 Wednesday June"
              amount={23.12}
              icon={<Icon name="cart-outline" size={22} color="#fff" />}
            />
            <ExpenseTile
              type="income"
              shopName="Amazon"
              date="5 Saturday May"
              amount={120.0}
              icon={<Icon name="cash-outline" size={22} color="#fff" />}
            />
            <ExpenseTile
              type="expense"
              shopName="Bus Ticket"
              date="12 Sunday January"
              amount={2.12}
              icon={<Icon name="bus-outline" size={22} color="#fff" />}
            />
          </View>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 25,
    paddingTop: 80,
    paddingBottom: 100,
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
    fontFamily: "Avenir",
  },

  boldedText: {
    color: "#042C5C",
    fontFamily: "AvenirBlack",
  },

  spentContainer: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 15,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    fontFamily: "Avenir",
    marginBottom: 85,
  },

  cardTitle: {
    color: "#77869E",
    fontSize: 13,
    fontFamily: "Avenir",
  },

  addBudgetButton: {
    color: "#0047CC",
    fontSize: 13,
    fontFamily: "Avenir",
    fontWeight: "700",
  },

  carouselTitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#77869E",
    marginBottom: 10,
    fontWeight: "700",
    marginTop: 20,
  },

  carouselContainer: {
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },

  chartElipse: {
    position: "absolute",
    top: -120,
    zIndex: 10,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },

  buttonText: {
    color: "#0047CC",
    fontSize: 13,
    fontFamily: "AvenirHeavy",
    marginLeft: 15,
  },

  blueButton: {
    backgroundColor: "#DFE7F5",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "45%",
  },
});

export default HomeScreen;
