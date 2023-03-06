import { Text, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>HOMEPAGE</Text>

      <HomeBar />
    </View>
  );
}