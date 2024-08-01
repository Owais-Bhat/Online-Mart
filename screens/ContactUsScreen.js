import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUsScreen = () => {
  const openWhatsApp = () => {
    const url = "whatsapp://send?phone=YOUR_PHONE_NUMBER&text=Hello!";
    Linking.openURL(url).catch(() => {
      alert("Make sure WhatsApp is installed on your device");
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions or need assistance, feel free to reach out
          to us.
        </Text>
        <Pressable style={styles.whatsappButton} onPress={openWhatsApp}>
          <Text style={styles.whatsappButtonText}>Contact Us on WhatsApp</Text>
        </Pressable>
        <View style={styles.chatbotContainer}>
          <Text style={styles.chatbotTitle}>Chat with our Bot</Text>
          <View style={styles.chatbotDemo}>
            <Text style={styles.chatbotMessage}>
              Bot: How can I help you today?
            </Text>
            <Text style={styles.chatbotMessage}>
              You: I need some information.
            </Text>
            <Text style={styles.chatbotMessage}>
              Bot: Sure, what do you need to know?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  whatsappButton: {
    padding: 10,
    backgroundColor: "#25D366",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  whatsappButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  chatbotContainer: {
    marginTop: 20,
  },
  chatbotTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chatbotDemo: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  chatbotMessage: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ContactUsScreen;
