// screens/SearchScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = ({ route }) => {
  const { query } = route.params;
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation();

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const filteredResults = response.data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Pressable
        onPress={() =>
          navigator.navigate("ProductDetailsScreen", { product: item })
        }
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </Pressable>
    </View>
  );

  if (loading) {
    return (
      <View style={globalStyles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Header />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    margin: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "green",
  },
  productList: {
    padding: 10,
  },
});

export default SearchScreen;
