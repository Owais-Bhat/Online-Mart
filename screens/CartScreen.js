import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem("cart");
        setCartItems(cart ? JSON.parse(cart) : []);
      } catch (error) {
        console.error("Failed to load cart items", error);
      }
    };

    fetchCartItems();
  }, []);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <Pressable
        style={styles.removeItemButton}
        onPress={() => removeItem(item)}
      >
        <Text style={styles.removeItemButtonText}>Remove</Text>
      </Pressable>
    </View>
  );

  const removeItem = async (itemToRemove) => {
    try {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  return (
    <LinearGradient
      colors={["white", "white", "#80deea"]}
      style={styles.container}
    >
      <Header />
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <Footer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 20,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemPrice: {
    fontSize: 16,
    color: "green",
  },
  removeItemButton: {
    padding: 10,
    backgroundColor: "#ff4081",
    borderRadius: 10,
  },
  removeItemButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default CartScreen;
