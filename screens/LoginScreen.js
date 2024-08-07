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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  async function login() {
    setLoading(true);
    try {
      const auth = getAuth(app);
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      Alert.alert("Success", response.user.email);
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
          { color: "white", textAlign: "left", paddingLeft: 10 },
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
            justifyContent: "space-between",
            paddingLeft: 10,
          },
        ]}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"white"}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <Pressable
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}
        >
          <Icon
            name={isPasswordVisible ? "eye-slash" : "eye"}
            size={20}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={login} />
        <Button
          title="Forgot Password"
          onPress={() => navigator.navigate("ForgotPassword")}
        />
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
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
