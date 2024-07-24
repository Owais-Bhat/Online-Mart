// src/components/DrawerContent.js
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import CustomDrawerItem from "./DrawerItem";

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.drawerItemsContainer}>
        {props.state.routes.map((route, index) => (
          <CustomDrawerItem
            key={index}
            label={route.name}
            onPress={() => props.navigation.navigate(route.name)}
          />
        ))}
      </View>
      <View style={styles.view}>
        <Text style={styles.text2}>Contact Us :-</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>+910000000000</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 140,
    resizeMode: "cover",
  },
  drawerItemsContainer: {
    justifyContent: "center",
  },
  view: {
    justifyContent: "flex-end",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "right",
  },
  view2: {
    justifyContent: "flex-end",
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
    color: "red",
  },
});

export default DrawerContent;
