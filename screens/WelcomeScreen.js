import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to OnlineMart</Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
          <Button
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
