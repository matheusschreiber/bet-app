import { Image, View } from "react-native";
import { styles } from "./style";
import trophy from "../../../../assets/icons/trophy_profile.png";
import ticket from "../../../../assets/icons/ticket_profile.png";
import star from "../../../../assets/icons/star_profile.png";
import { MyText } from "../../MyText";
import { useContextValue } from "../../../services/contextElement";

export function Statistics() {
  const { user } = useContextValue();
  const goingBets = user.bets.filter((bet) => bet.status === "ongoing");
  return (
    <View style={styles.statisticsContainer}>
      <View style={styles.statisticsItem}>
        <View style={styles.starIcon}>
          <Image source={star} />
        </View>
        <MyText style={styles.title}>
          {user.points.toLocaleString("pt-BR")}
        </MyText>
        <MyText style={styles.subtitle}>pontos</MyText>
      </View>

      <View style={styles.statisticsItem}>
        <View style={styles.ticketIcon}>
          <Image source={ticket} />
        </View>
        <MyText style={styles.title}>
          {goingBets?.length}
          {goingBets
            ? goingBets?.length > 1
              ? " apostas"
              : " aposta"
            : "0 apostas"}
        </MyText>
        <MyText style={styles.subtitle}>em andamento</MyText>
      </View>

      <View style={styles.statisticsItem}>
        <View style={styles.trophyIcon}>
          <Image source={trophy} />
        </View>
        <MyText style={styles.title}>{user.wins} vitórias</MyText>
        <MyText style={styles.subtitle}>totais</MyText>
      </View>
    </View>
  );
}
