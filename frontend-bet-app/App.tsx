import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeBar } from "./src/components/HomeBar";
import { ContextProvider } from "./src/services/contextElement";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <ContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <HomeBar />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
});
