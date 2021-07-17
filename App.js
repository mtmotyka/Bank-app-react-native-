import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ExpensesScreen from "./src/screens/ExpensesScreen";
import WalletScreen from "./src/screens/WalletScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const AddButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ top: -30, justifyContent: "center", alignItems: "center" }}
    onPress={onPress}
  >
    <View
      style={[
        { width: 50, height: 50, borderRadius: 35, backgroundColor: "#0047CC" },
        styles.shadow,
      ]}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          elevation: 0,
          backgroundColor: "#fff",
          borderTopColor: "transparent",
          height: 82,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Icon
                name="home"
                size={22}
                color={focused ? "#0047CC" : "gray"}
                style={{ marginBottom: 2 }}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: focused ? "#0047CC" : "#77869E" },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Icon
                name="stats-chart-outline"
                size={22}
                color={focused ? "#0047CC" : "gray"}
                style={{ marginBottom: 2 }}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: focused ? "#0047CC" : "#77869E" },
                ]}
              >
                Expenses
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focued }) => (
            <Icon
              name="add-outline"
              size={38}
              color="#A6E8FF"
              style={{ marginLeft: 4 }}
            />
          ),
          tabBarButton: (props) => <AddButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Icon
                name="wallet-outline"
                size={22}
                color={focused ? "#0047CC" : "gray"}
                style={{ marginBottom: 2 }}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: focused ? "#0047CC" : "#77869E" },
                ]}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navItem}>
              <Icon
                name="person-outline"
                size={22}
                color={focused ? "#0047CC" : "gray"}
                style={{ marginBottom: 2 }}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: focused ? "#0047CC" : "#77869E" },
                ]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#0047CC",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9.46,

    elevation: 9,
  },

  navLabel: {
    fontSize: 10,
    fontWeight: "600",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
