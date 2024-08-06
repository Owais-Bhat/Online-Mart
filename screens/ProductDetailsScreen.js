import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const addToCart = async (product) => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      let cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(product);
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
      navigation.navigate("CartScreen");
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const wishlist = await AsyncStorage.getItem("wishlist");
      let wishlistItem = wishlist ? JSON.parse(wishlist) : [];
      wishlistItem.push(product);
      await AsyncStorage.setItem("wishlist", JSON.stringify(wishlistItem));
      navigation.navigate("WishlistScreen");
    } catch (error) {
      console.error("Failed to add to wishlist", error);
    }
  };

  return (
    <LinearGradient
      colors={["white", "white", "#80deea"]}
      style={styles.container}
    >
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.wishlistButton]}
            onPress={() => addToWishlist(product)}
          >
            <Text style={styles.buttonText}>Add to Wishlist</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.cartButton]}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.button, styles.cameraButton]}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          <Icon name="camera" size={24} color="white" />
          <Text style={styles.buttonText}>Try On</Text>
        </Pressable>
      </ScrollView>

      <Footer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  cameraButton: {
    backgroundColor: "#00796b",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 10,
  },
  wishlistButton: {
    backgroundColor: "#ff4081",
  },
  cartButton: {
    backgroundColor: "#00796b",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
