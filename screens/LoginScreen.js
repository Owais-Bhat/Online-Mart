import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();

  async function registerAndLogin() {
    setLoading(true);
    try {
      const auth = getAuth(app);

      await createUserWithEmailAndPassword(auth, email, password);
      const response = await signInWithEmailAndPassword(auth, email, password);

      setLoading(false);
      Alert.alert("Success", response.user.email);
      navigator.navigate("Main");
      return;
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
        style={[styles.input, { color: "white", textAlign: "center" }]}
        placeholder="Email"
        placeholderTextColor={"white"}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          { marginTop: 20, color: "white", textAlign: "center", fontSize: 15 },
        ]}
        placeholder="Password"
        placeholderTextColor={"white"}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.View}>
        <TouchableOpacity style={{ width: "100%" }} onPress={registerAndLogin}>
          {loading ? (
            <ActivityIndicator
              size={"small"}
              color={"white"}
              animating={loading}
            />
          ) : (
            <Text style={{ color: "white" }}> Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

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
});
