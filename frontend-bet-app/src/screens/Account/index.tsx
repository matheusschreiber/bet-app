import { Image, View } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { MyText } from "../../components/MyText";
import background from "../../../assets/simple_background.png";
import { styles } from "./style";
import toolboxIcon from "../../../assets/icons/toolbox.png";
import { Notifications } from "../../components/Notifications";

export function Account() {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={background} />

      <View style={styles.topContainer}>
        <View style={styles.toolboxIconContainer}>
          <Image style={styles.toolboxIcon} source={toolboxIcon} />
        </View>
        <View>
          <MyText style={styles.gamesTitle}>Configurações</MyText>
          <View style={styles.dateContainer}>
            <MyText>Informações e ferramentas</MyText>
          </View>
        </View>
      </View>

      <HomeBar />
      <Notifications />
    </View>
  );
}
