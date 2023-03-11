import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../@types/navigation";
import { leadingZeros } from "../../components/GameCard";
import gameBackground from "../../../assets/game_background.png";
import leftArrow from "../../../assets/icons/left_arrow.png";
import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import clockIcon from "../../../assets/icons/clock.png";
import ticketLarge from "../../../assets/icons/ticket_large.png";
import { BetPanel } from "../../components/BetPanel";
import { MyText } from "../../components/MyText";

export function GameBet() {
  const router = useRoute();
  const game = router.params as GameProps;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BetPanel {...game} />
      <Image source={gameBackground} style={styles.backgroundImage} />
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={leftArrow} style={styles.backArrow} />
      </TouchableOpacity>

      <View style={styles.teamsContainer}>
        <View>
          <MyText style={styles.iconContainer}>{game.team1Icon}</MyText>
          <MyText style={styles.teamName}>{game.team1}</MyText>
        </View>

        <MyText style={styles.vsText}>VS</MyText>

        <View>
          <MyText style={styles.iconContainer}>{game.team2Icon}</MyText>
          <MyText style={styles.teamName}>{game.team2}</MyText>
        </View>
      </View>

      <MyText style={styles.descText}>{game.desc}</MyText>

      <View style={styles.infoContainer}>
        <View style={styles.subtitleContainer}>
          <Image source={calendarIcon} />
          <MyText style={styles.subtitle}>
            {leadingZeros(new Date(game.date).getDay())}{" "}
            {new Date(game.date)
              .toLocaleString("default", { month: "long" })
              .charAt(0)
              .toUpperCase() +
              new Date(game.date)
                .toLocaleString("default", { month: "long" })
                .slice(1)}
          </MyText>
        </View>

        <View style={styles.subtitleContainer}>
          <Image source={clockIcon} />
          <MyText style={styles.subtitle}>
            {leadingZeros(new Date(game.date).getHours())}:
            {leadingZeros(new Date(game.date).getMinutes())}
          </MyText>
        </View>

        <View style={styles.subtitleContainer}>
          <Image source={ticketIcon} />
          <MyText style={styles.subtitle}>{game.amount}</MyText>
        </View>
      </View>

      <ScrollView style={styles.playersContainer}>
        <View style={styles.betAreaContainer}>
          <View style={styles.ticketIconBetAreaContainer}>
            <Image source={ticketLarge} style={styles.ticketIconBetArea} />
          </View>
          <View>
            <MyText style={styles.betAreaText}>
              Você ainda não fez uma aposta para este jogo
            </MyText>
            <TouchableOpacity>
              <MyText style={styles.betAreaButton}>Fazer aposta</MyText>
            </TouchableOpacity>
          </View>
        </View>
        <MyText style={styles.playersTitle}>Escalação</MyText>
      </ScrollView>
    </View>
  );
}
