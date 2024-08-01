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

const WishlistScreen = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const wishlist = await AsyncStorage.getItem("wishlist");
        setWishlistItems(wishlist ? JSON.parse(wishlist) : []);
      } catch (error) {
        console.error("Failed to load wishlist items", error);
      }
    };

    fetchWishlistItems();
  }, []);

  const renderWishlistItem = ({ item }) => (
    <View style={styles.wishlistItem}>
      <Image source={{ uri: item.image }} style={styles.wishlistItemImage} />
      <View style={styles.wishlistItemDetails}>
        <Text style={styles.wishlistItemTitle}>{item.title}</Text>
        <Text style={styles.wishlistItemPrice}>${item.price}</Text>
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
      const updatedWishlistItems = wishlistItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      setWishlistItems(updatedWishlistItems);
      await AsyncStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlistItems)
      );
    } catch (error) {
      console.error("Failed to remove item from wishlist", error);
    }
  };

  return (
    <LinearGradient
      colors={["#e0f7fa", "#e0f7fa", "#80deea"]}
      style={styles.container}
    >
      <Header />
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
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
  wishlistItem: {
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
  wishlistItemImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 20,
  },
  wishlistItemDetails: {
    flex: 1,
  },
  wishlistItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  wishlistItemPrice: {
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

export default WishlistScreen;
