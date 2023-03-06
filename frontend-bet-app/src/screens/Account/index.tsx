import { Image, Text, View, ScrollView } from "react-native";
import { HomeBar } from "../../components/HomeBar";
import { Groups } from "../../components/Groups";
import { Games } from "../../components/Games";
import background from "../../../assets/home_background.png";
import bellIcon from "../../../assets/icons/bell.png";
import trophy from "../../../assets/icons/trophy_profile.png";
import ticket from "../../../assets/icons/ticket_profile.png";
import star from "../../../assets/icons/star_profile.png";
import imagemTeste from "../../../assets/teste.jpg";
import { styles } from "./style";

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
            <Text style={styles.profileName}>Fulana da silva</Text>
          </View>

          <View style={styles.statisticsContainer}>
            <View style={styles.statisticsItem}>
              <Image source={star} />
              <Text style={styles.title}>10.350</Text>
              <Text style={styles.subtitle}>pontos</Text>
            </View>

            <View style={styles.statisticsItem}>
              <Image source={ticket} />
              <Text style={styles.title}>3 apostas</Text>
              <Text style={styles.subtitle}>em andamento</Text>
            </View>

            <View style={styles.statisticsItem}>
              <Image source={trophy} />
              <Text style={styles.title}>45 vitórias</Text>
              <Text style={styles.subtitle}>totais</Text>
            </View>
          </View>

          <Groups />

          <Games />

          <View style={{ width: "100%", height: 150 }}></View>
        </View>
      </ScrollView>
      <HomeBar />
    </>
  );
}
