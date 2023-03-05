import { Text, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";

import { styles } from "./style";

export function Add() {
  return (
    <View style={styles.container}>
      <Text>ADD BET PAGE</Text>

      <HomeBar />
    </View>
  );
}
