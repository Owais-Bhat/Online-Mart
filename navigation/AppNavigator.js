import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigator from "./DrawerNavigator";
import { TextInput, View, StyleSheet } from "react-native";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Layout from "../components/Layout";
import SearchScreen from "../screens/SearchScreen";
import WishlistScreen from "../screens/WishlistScreen";
import CartScreen from "../screens/CartScreen";
import Header from "../components/Header";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/CameraScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CameraScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: "true" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: "true" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: "true" }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{ headerTitle: () => <Header /> }}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
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
