import { View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";

import { styles } from "./style";

export function Games() {
  return (
    <View style={styles.container}>
      <MyText>GAMES PAGE</MyText>

      <HomeBar />
    </View>
  );
}
