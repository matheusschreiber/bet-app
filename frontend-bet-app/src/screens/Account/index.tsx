import { View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";

import { styles } from "./style";

export function Account() {
  return (
    <View style={styles.container}>
      <MyText>ACCOUNT PAGE</MyText>

      <HomeBar />
    </View>
  );
}
