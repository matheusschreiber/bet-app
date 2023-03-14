import { Image, View, ScrollView } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { Groups } from "../../components/HomeScreenComponents/Groups";
import background from "../../../assets/home_background.png";
import imagemTeste from "../../../assets/teste.jpg";
import { styles } from "./style";
import { MyText } from "../../components/MyText";
import { Statistics } from "../../components/HomeScreenComponents/Statistics";
import { Games } from "../../components/HomeScreenComponents/Games";
import { Notifications } from "../../components/Notifications";
import { mainUser } from "../../services/provisoryData";

export function Home() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={background} style={styles.backgroundContainer} />

          <View style={styles.profileContainer}>
            <Image source={imagemTeste} style={styles.profilePicture} />
            <MyText style={styles.profileName}>{mainUser.name}</MyText>
          </View>

          <Statistics />

          <Groups />

          <Games />

          <View style={{ width: "100%", height: 150 }}></View>
        </View>
        <Notifications />
      </ScrollView>
      <HomeBar />
    </>
  );
}
