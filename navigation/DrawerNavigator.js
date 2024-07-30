// navigation/DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "../screens/AboutScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import HomeScreen from "../screens/HomeScreen";
import Layout from "../components/Layout";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home">
        {() => (
          <Layout>
            <HomeScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="About">
        {() => (
          <Layout>
            <AboutScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Contact Us">
        {() => (
          <Layout>
            <ContactUsScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Privacy Policy">
        {() => (
          <Layout>
            <PrivacyPolicyScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Profile">
        {() => (
          <Layout>
            <ProfileScreen />
          </Layout>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Cart">
        {() => (
          <Layout>
            <CartScreen />
          </Layout>
        )}
      </Drawer.Screen>
      {/* <Drawer.Screen name="ProductDetailsScreen">
        {() => <Layout>{<ProductDetailsScreen />}</Layout>}
      </Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
