import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Bet, GameProps } from "../../@types/navigation";
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

import winIcon from "../../../assets/icons/check_green.png";
import loseIcon from "../../../assets/icons/close_red.png";
import starIcon from "../../../assets/icons/star_profile.png";

export function GameBet() {
  const router = useRoute();
  const { game } = router.params as { game: GameProps };
  const { bets } = router.params as { bets: { bet: Bet }[] };
  const navigation = useNavigation();
  const { isBetting, setIsBetting, user, globalUsers } = useContextValue();
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  useEffect(() => {
    if (game.team_1_score || game.team_2_score) setHasFinished(true);
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
          <MyText style={styles.iconContainer}>{game.team_1_icon}</MyText>
          <MyText style={styles.teamName}>{game.team_1_name}</MyText>
        </View>

        <MyText style={styles.vsText}>VS</MyText>

        <View>
          <MyText style={styles.iconContainer}>{game.team_2_icon}</MyText>
          <MyText style={styles.teamName}>{game.team_2_name}</MyText>
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
            {bets.length} apostas para esse jogo
          </MyText>
        </View>
      </View>

      <View style={styles.playersContainer}>
        {/* {!user.bets ||
          (!user.bets.find(({ bet }) => bet.id_match === game.id) && (
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
          ))} */}
        <MyText style={styles.playersTitle}>Apostadores</MyText>
        <FlatList
          data={bets}
          contentContainerStyle={{ width: "100%", gap: 10 }}
          style={{ width: "100%" }}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              {bets && bets.length > 0 && (
                <MyText style={styles.headerTextName}>NOME</MyText>
              )}
              {hasFinished && (
                <MyText style={styles.headerText}>VITÓRIA</MyText>
              )}
              {hasFinished && <MyText style={styles.headerText}>PLACAR</MyText>}
              {hasFinished && <MyText style={styles.headerText}>PONTOS</MyText>}
            </View>
          }
          ListFooterComponent={<View style={{ height: 500 }} />}
          renderItem={({ item }) => {
            const user = globalUsers.find(
              (g) => g.user.id === item.bet.id_user
            );
            if (!user) return <></>;
            return (
              <View style={styles.betContainer}>
                <View style={styles.betUserContainer}>
                  <Image
                    style={styles.userPhoto}
                    source={{ uri: user?.user.picture }}
                  />
                  <MyText>{user.user.name}</MyText>
                </View>
                {hasFinished &&
                  (item.bet.result_win ? (
                    <View style={styles.winIcon}>
                      <Image style={styles.icon} source={winIcon} />
                    </View>
                  ) : (
                    <View style={styles.loseIcon}>
                      <Image style={styles.icon} source={loseIcon} />
                    </View>
                  ))}

                {hasFinished &&
                  (item.bet.score_win ? (
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
                    <MyText>{item.bet.points}</MyText>
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
