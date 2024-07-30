import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import { TextInput, View, StyleSheet } from "react-native";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Layout from "../components/Layout";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{
          headerTitle: () => <SearchBar />,
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  gradient: {
    flex: 1,
  },
});
