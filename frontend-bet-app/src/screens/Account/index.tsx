import { Text, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";

import { styles } from "./style";

export function Account() {
  return (
    <View style={styles.container}>
      <Text>ACCOUNT PAGE</Text>

      <HomeBar />
    </View>
  );
}
