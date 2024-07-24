import React from "react";
import { View, StyleSheet } from "react-native";
import TabNavigator from "../navigation/TabNavigator";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: "#5CE1E6",
  },
});

export default Footer;
