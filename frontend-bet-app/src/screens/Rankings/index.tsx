import { View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";

import { styles } from "./style";

export function Rankings() {
  return (
    <View style={styles.container}>
      <MyText>RANKINGS PAGE</MyText>

      <HomeBar />
    </View>
  );
}
