import React from "react";
import { StatusBar } from "expo-status-bar";
import { ContextProvider } from "./src/services/contextElement";
import { Routes } from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    montserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    montserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
    montserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <ContextProvider>
      <StatusBar style="auto" />
      <Routes />
    </ContextProvider>
  );
}
