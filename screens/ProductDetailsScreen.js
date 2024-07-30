import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Footer from "../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation;
  return (
    <LinearGradient
      colors={["white", "white", "lightblue"]}
      style={styles.container}
    >
      <Header />

      <View style={styles.con}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    flexWrap: "no-wrap",
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 20,
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  con: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "black",
  },
});

export default ProductDetailsScreen;
