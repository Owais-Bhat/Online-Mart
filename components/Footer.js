import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import User from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles/globalStyles";
import CartScreen from "../screens/CartScreen";

const Footer = ({}) => {
  const WishlistScreen = ({ route }) => {
    const { product } = route.params;
  };
  const navigation = useNavigation();

  return (
    <View style={globalStyles.footer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("WishlistScreen", { product: <WishlistScreen /> })
        }
      >
        <User name="heart" size={30} color={"gray"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={30} color={"gray"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CartScreen", { product: <CartScreen /> })
        }
      >
        <Icon name="shopping-cart" size={30} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
