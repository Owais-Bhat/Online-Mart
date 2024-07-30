import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import globalStyles from "../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../assets/profile.png")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 40,
  },
});
