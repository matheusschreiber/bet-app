import { View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";

import { styles } from "./style";

export function Add() {
  return (
    <View style={styles.container}>
      <MyText>ADD BET PAGE</MyText>

      <HomeBar />
    </View>
  );
}
