import { Image, View } from "react-native";
import { MyText } from "../MyText";
import { styles } from "./style";
import trophy from "../../../assets/icons/trophy_profile.png";
import ticket from "../../../assets/icons/ticket_profile.png";
import star from "../../../assets/icons/star_profile.png";

export function Statistics() {
  return (
    <View style={styles.statisticsContainer}>
      <View style={styles.statisticsItem}>
        <View style={styles.starIcon}>
          <Image source={star} />
        </View>
        <MyText style={styles.title}>10.350</MyText>
        <MyText style={styles.subtitle}>pontos</MyText>
      </View>

      <View style={styles.statisticsItem}>
        <View style={styles.ticketIcon}>
          <Image source={ticket} />
        </View>
        <MyText style={styles.title}>3 apostas</MyText>
        <MyText style={styles.subtitle}>em andamento</MyText>
      </View>

      <View style={styles.statisticsItem}>
        <View style={styles.trophyIcon}>
          <Image source={trophy} />
        </View>
        <MyText style={styles.title}>45 vitórias</MyText>
        <MyText style={styles.subtitle}>totais</MyText>
      </View>
    </View>
  );
}
