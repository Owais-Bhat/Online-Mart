import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import User from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles/globalStyles";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <User name="user" size={30} color={"#A1C398"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={30} color={"#A1C398"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Icon name="shopping-cart" size={30} color={"#A1C398"} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
