import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import globalStyles from "../styles/globalStyles";



const Layout = ({ children }) => {
  return (
    <View style={globalStyles.container}>
      <Header />
      <ScrollView style={globalStyles.content}>{children}</ScrollView>
      <Footer />
    </View>
  );
};

export default Layout;
