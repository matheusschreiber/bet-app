import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../@types/navigation";
import { leadingZeros } from "../../components/GameCard";
import gameBackground from "../../../assets/game_background.png";
import leftArrow from "../../../assets/icons/left_arrow.png";
import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import clockIcon from "../../../assets/icons/clock.png";
import ticketLarge from "../../../assets/icons/ticket_large.png";

export function GameBet() {
  const router = useRoute();
  const game = router.params as GameProps;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={gameBackground} style={styles.backgroundImage} />
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={leftArrow} style={styles.backArrow} />
      </TouchableOpacity>

      <View style={styles.teamsContainer}>
        <View>
          <Text style={styles.iconContainer}>{game.team1Icon}</Text>
          <Text style={styles.teamName}>{game.team1}</Text>
        </View>

        <Text style={styles.vsText}>VS</Text>

        <View>
          <Text style={styles.iconContainer}>{game.team2Icon}</Text>
          <Text style={styles.teamName}>{game.team2}</Text>
        </View>
      </View>

      <Text style={styles.descText}>{game.desc}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.subtitleContainer}>
          <Image source={calendarIcon} />
          <Text style={styles.subtitle}>
            {leadingZeros(new Date(game.date).getDay())}{" "}
            {new Date(game.date)
              .toLocaleString("default", { month: "long" })
              .charAt(0)
              .toUpperCase() +
              new Date(game.date)
                .toLocaleString("default", { month: "long" })
                .slice(1)}
          </Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Image source={clockIcon} />
          <Text style={styles.subtitle}>
            {leadingZeros(new Date(game.date).getHours())}:
            {leadingZeros(new Date(game.date).getMinutes())}
          </Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Image source={ticketIcon} />
          <Text style={styles.subtitle}>{game.amount}</Text>
        </View>
      </View>

      <ScrollView style={styles.playersContainer}>
        <View style={styles.betAreaContainer}>
          <View style={styles.ticketIconBetAreaContainer}>
            <Image source={ticketLarge} style={styles.ticketIconBetArea} />
          </View>
          <View>
            <Text style={styles.betAreaText}>
              Você ainda não fez uma aposta para este jogo
            </Text>
            <TouchableOpacity>
              <Text style={styles.betAreaButton}>Fazer aposta</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.playersTitle}>Escalação</Text>
      </ScrollView>
    </View>
  );
}
