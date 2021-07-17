import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Layout from "../components/Layout";
import ScreenHeading from "../components/ScreenHeading";
import ExpensesChart from "../components/ExpensesChart";

const ExpensesScreen = () => {
  return (
    <Layout>
      <ScreenHeading icon="wallet">Expenses</ScreenHeading>
      <View>
        <ExpensesChart />
      </View>
    </Layout>
  );
};

export default ExpensesScreen;
