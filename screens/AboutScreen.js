import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TabNavigator from "../navigation/TabNavigator";

export default function AboutScreen() {
  return (
    <View>
      <Header />
      <View style={{ flex: 1, height: 1000 }}>
        <Text>hello</Text>
      </View>
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({});
