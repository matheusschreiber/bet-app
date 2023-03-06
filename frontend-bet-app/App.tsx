import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContextProvider } from "./src/services/contextElement";
import { THEME } from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ContextProvider>
      <StatusBar style="auto" />
      <Routes />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
