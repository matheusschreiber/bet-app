import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { GameProps } from "../../@types/navigation";
import gameBackground from "../../../assets/game_background.png";
import leftArrow from "../../../assets/icons/left_arrow.png";
import { styles } from "./style";

import calendarIcon from "../../../assets/icons/calendar.png";
import ticketIcon from "../../../assets/icons/ticket.png";
import clockIcon from "../../../assets/icons/clock.png";
import ticketLarge from "../../../assets/icons/ticket_large.png";
import { MyText } from "../../components/MyText";
import { useEffect, useState } from "react";
import { useContextValue } from "../../services/contextElement";
import { BetPanel } from "../../components/GameBetScreenComponents/BetPanel";
import { leadingZeros } from "../../components/HomeScreenComponents/GameCard";
import { mainUser } from "../../services/provisoryData";

import winIcon from "../../../assets/icons/check_green.png";
import loseIcon from "../../../assets/icons/close_red.png";
import starIcon from "../../../assets/icons/star_profile.png";

export function GameBet() {
  const router = useRoute();
  const game = router.params as GameProps;
  const navigation = useNavigation();
  const { isBetting, setIsBetting } = useContextValue();
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  useEffect(() => {
    if (game.team1Score && game.team2Score) setHasFinished(true);
    else setHasFinished(false);
  }, []);

  return (
    <View style={styles.container}>
      {isBetting ? <BetPanel {...game} /> : ""}

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
          <MyText style={styles.subtitle}>
            {game.bets?.length} apostas para esse jogo
          </MyText>
        </View>
      </View>

      <View style={styles.playersContainer}>
        {!mainUser.bets ||
          (!mainUser.bets?.find((bet) => bet.match === game.id) && (
            <View style={styles.betAreaContainer}>
              <View style={styles.ticketIconBetAreaContainer}>
                <Image source={ticketLarge} style={styles.ticketIconBetArea} />
              </View>
              <View>
                <MyText style={styles.betAreaText}>
                  Você ainda não fez uma aposta para este jogo
                </MyText>
                <TouchableOpacity onPress={() => setIsBetting(true)}>
                  <MyText style={styles.betAreaButton}>Fazer aposta</MyText>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        <MyText style={styles.playersTitle}>Apostadores</MyText>
        <FlatList
          data={game.bets}
          contentContainerStyle={{ width: "100%", gap: 10 }}
          style={{ width: "100%" }}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              {game.bets && game.bets.length > 0 && (
                <MyText style={styles.headerTextName}>NOME</MyText>
              )}
              {hasFinished && (
                <MyText style={styles.headerText}>VITÓRIA</MyText>
              )}
              {hasFinished && <MyText style={styles.headerText}>PLACAR</MyText>}
              {hasFinished && <MyText style={styles.headerText}>PONTOS</MyText>}
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.betContainer}>
              <View style={styles.betUserContainer}>
                <Image style={styles.userPhoto} source={item.user.picture} />
                <MyText>{item.user.name}</MyText>
              </View>
              {hasFinished &&
                (item.result_win ? (
                  <View style={styles.winIcon}>
                    <Image style={styles.icon} source={winIcon} />
                  </View>
                ) : (
                  <View style={styles.loseIcon}>
                    <Image style={styles.icon} source={loseIcon} />
                  </View>
                ))}

              {hasFinished &&
                (item.score_win ? (
                  <View style={styles.winIcon}>
                    <Image style={styles.icon} source={winIcon} />
                  </View>
                ) : (
                  <View style={styles.loseIcon}>
                    <Image style={styles.icon} source={loseIcon} />
                  </View>
                ))}

              {hasFinished && (
                <View style={styles.pointsContainer}>
                  <Image source={starIcon} />
                  <MyText>{item.points}</MyText>
                </View>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
}
