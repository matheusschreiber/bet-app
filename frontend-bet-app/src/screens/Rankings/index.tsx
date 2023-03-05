import { Text, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";

import { styles } from "./style";

export function Rankings() {
  return (
    <View style={styles.container}>
      <Text>RANKINGS PAGE</Text>

      <HomeBar />
    </View>
  );
}
