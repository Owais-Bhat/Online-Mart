import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.productContainer}
      onPress={() =>
        navigation.navigate("ProductDetailsScreen", { product: item })
      }
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>
          {item.title.length > 20
            ? item.title.substring(0, 20) + "..."
            : item.title}
        </Text>
        <Text style={styles.productDescription}>
          {item.description.length > 50
            ? item.description.substring(0, 50) + "..."
            : item.description}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </Pressable>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
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
    marginRight: 10,
    resizeMode: "contain",
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "gray",
  },
  productPrice: {
    fontSize: 14,
    color: "green",
  },
});

export default HomeScreen;
