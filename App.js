import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import GradientBackground from "./styles/GradientBackground";

function App() {
  return (
    <GradientBackground>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GradientBackground>
  );
}

export default App;
