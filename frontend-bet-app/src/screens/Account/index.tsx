import { Image, View, ScrollView } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { Groups } from "../../components/Groups";
import { Games } from "../../components/Games";
import background from "../../../assets/home_background.png";
import bellIcon from "../../../assets/icons/bell.png";
import imagemTeste from "../../../assets/teste.jpg";
import { styles } from "./style";
import { MyText } from "../../components/MyText";
import { Statistics } from "../../components/Statistics";

export function Account() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={background} style={styles.backgroundContainer} />
          <View style={styles.topContainer}>
            <View style={styles.iconContainer}>
              <Image source={bellIcon} style={styles.bellIcon} />
            </View>
          </View>

          <View style={styles.profileContainer}>
            <Image source={imagemTeste} style={styles.profilePicture} />
            <MyText style={styles.profileName}>Fulana da silva</MyText>
          </View>

          <Statistics />

          <Groups />

          <Games />

          <View style={{ width: "100%", height: 150 }}></View>
        </View>
      </ScrollView>
      <HomeBar />
    </>
  );
}
