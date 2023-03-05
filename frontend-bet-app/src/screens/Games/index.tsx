import { Text, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";

import { styles } from "./style";

export function Games() {
  return (
    <View style={styles.container}>
      <Text>GAMES PAGE</Text>

      <HomeBar />
    </View>
  );
}
