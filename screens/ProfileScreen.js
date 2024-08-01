import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import globalStyles from "../styles/globalStyles";

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={require("../assets/profile.png")} style={styles.image} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <View style={styles.buttonContainer}>
          <Button title="Edit Profile" onPress={() => {}} />
          <Button title="Settings" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
