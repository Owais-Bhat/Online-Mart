// navigation/DrawerNavigator.js
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import AboutScreen from "../screens/AboutScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import HomeScreen from "../screens/HomeScreen";
import Layout from "../components/Layout";
import ProfileScreen from "../screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.drawerContent}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      {/* Login Button */}
      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
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
      {/* <Drawer.Screen name="WishlistScreen">
        {() => <WishlistScreen />}
      </Drawer.Screen> */}

      {/* <Drawer.Screen name="CartScreen">{() => <CartScreen />}</Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  drawerItems: {
    flex: 1,
  },
  loginButton: {
    padding: 15,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DrawerNavigator;
