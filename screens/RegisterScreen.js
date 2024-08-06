import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigator = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  async function register() {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must contain at least one capital letter and one symbol"
      );
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      Alert.alert("Success", "User registered successfully");
      navigator.navigate("Main");
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert("Error", error.message);
    }
  }

  return (
    <LinearGradient
      colors={["white", "white", "#80deea"]}
      style={styles.container}
    >
      <StatusBar style="auto" />

      <TextInput
        style={[
          styles.input,
          {
            marginTop: 20,
            color: "white",
            textAlign: "left",
            fontSize: 15,
            padding: 10,
          },
        ]}
        placeholder="Email"
        placeholderTextColor={"white"}
        onChangeText={setEmail}
      />
      <View
        style={[
          styles.input,
          {
            marginTop: 20,
            color: "white",
            textAlign: "center",
            fontSize: 15,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"white"}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          style={{ flex: 1, marginHorizontal: 1, padding: 10, color: "white" }}
        />
        <Pressable
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}
        >
          <Icon
            name={isPasswordVisible ? "eye-slash" : "eye"}
            size={20}
            color="white"
            style={{ marginRight: 5 }}
          />
        </Pressable>
      </View>
      <TextInput
        style={[
          styles.input,
          {
            marginTop: 20,
            color: "white",
            textAlign: "left",
            fontSize: 15,
            padding: 10,
          },
        ]}
        placeholder="Confirm Password"
        placeholderTextColor={"white"}
        onChangeText={setConfirmPassword}
        secureTextEntry={!isPasswordVisible}
      />
      <View style={styles.View}>
        <TouchableOpacity style={{ width: "100%" }} onPress={register}>
          {loading ? (
            <ActivityIndicator
              size={"small"}
              color={"white"}
              animating={loading}
            />
          ) : (
            <Text style={{ color: "white" }}>Register</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  View: {
    width: "80%",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "teal",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "gray",
    fontSize: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  toggleButton: {
    padding: 10,
    justifyItems: "flex-end",
  },
});
