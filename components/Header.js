// components/Header.js
import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import Icon from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles/globalStyles";

const { width, height } = Dimensions.get("window");

const SearchBar = ({ onFocusChange, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const widthAnim = useRef(new Animated.Value(40)).current;

  const toggleFocus = () => {
    if (isFocused) {
      Animated.timing(widthAnim, {
        toValue: 40,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setIsFocused(false);
        onFocusChange(false);
      });
    } else {
      setIsFocused(true);
      onFocusChange(true);
      Animated.timing(widthAnim, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SafeAreaView style={styles.searchContainer}>
      <Animated.View
        style={[styles.searchInputContainer, { width: widthAnim }]}
      >
        {isFocused && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#000"
            onBlur={toggleFocus}
            autoFocus={true}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
          />
        )}
        <Pressable onPress={toggleFocus}>
          <Icon name="search" size={24} style={styles.searchIcon} />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

const Header = () => {
  const navigation = useNavigation();
  const [isBlurred, setIsBlurred] = useState(false);

  const handleSearch = (query) => {
    navigation.navigate("Search", { query });
  };

  return (
    <View style={styles.headerContainer}>
      {isBlurred && <BlurView intensity={50} style={StyleSheet.absoluteFill} />}
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={styles.iconWrapper}
      >
        <Icon name="bars" size={28} color="#007bff" style={styles.icon} />
      </Pressable>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <SearchBar onFocusChange={setIsBlurred} onSearch={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height * 0.15, // 15% of screen height
    width: "100%",
    backgroundColor: "transparent",
    paddingTop: height * 0.04, // 4% of screen height
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    justifyContent: "flex-end",
    zIndex: 1,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 10,
    color: "#000",
  },
  searchIcon: {
    padding: 6,
    color: "#007bff",
  },
  iconWrapper: {
    padding: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.35, // 35% of screen width
    height: height * 0.2, // 10% of screen height
  },
});

export default Header;
