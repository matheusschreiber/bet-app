import { View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <MyText>HOMEPAGE</MyText>

      <HomeBar />
    </View>
  );
}
