// navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DrawerNavigator from "./DrawerNavigator";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import SearchScreen from "../screens/SearchScreen";
import WishlistScreen from "../screens/WishlistScreen";
import CartScreen from "../screens/CartScreen";
import Header from "../components/Header";

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
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
