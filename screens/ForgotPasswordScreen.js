import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function resetPassword() {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      Alert.alert("Success", "Password reset email sent");
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
      <View style={styles.View}>
        <TouchableOpacity style={{ width: "100%" }} onPress={resetPassword}>
          {loading ? (
            <ActivityIndicator
              size={"small"}
              color={"white"}
              animating={loading}
            />
          ) : (
            <Text style={{ color: "white" }}>Reset Password</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;

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
