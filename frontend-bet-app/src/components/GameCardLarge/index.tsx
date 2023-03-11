import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { GameProps, User } from "../../@types/navigation";
import { THEME } from "../../theme";
import { MyText } from "../MyText";
import { styles } from "./style";

import downArrowIcon from "../../../assets/icons/down_arrow.png";
import upArrowIcon from "../../../assets/icons/up_arrow.png";
import winIcon from "../../../assets/icons/check_green.png";
import loseIcon from "../../../assets/icons/close_red.png";
import starIcon from "../../../assets/icons/star_profile.png";

import { useState } from "react";

interface GameCardLargeProps {
  gameProps: GameProps;
  //TODO: change to bets[]
  betsResults: User[];
}

export function GameCardLarge({ gameProps, betsResults }: GameCardLargeProps) {
  const [betsCollapsed, setBetsCollapsed] = useState<boolean>(true);

  return (
    <View style={styles.mainContainer}>
      <MyText style={styles.descText}>{gameProps.desc}</MyText>
      <View style={styles.middleContainer}>
        <View style={styles.teamContainer}>
          <MyText
            style={{
              ...styles.teamIcon,
              backgroundColor: THEME.COLORS.LIGHT_BLUE,
            }}
          >
            {gameProps.team1Icon}
          </MyText>
          <View style={styles.teamNameContainer}>
            <MyText style={styles.teamName}>{gameProps.team1}</MyText>
            <MyText style={styles.teamScore}>{gameProps.team1Score}</MyText>
          </View>
        </View>

        <View style={styles.teamContainer}>
          <MyText
            style={{
              ...styles.teamIcon,
              backgroundColor: THEME.COLORS.LIGHT_RED,
            }}
          >
            {gameProps.team2Icon}
          </MyText>
          <View style={styles.teamNameContainer}>
            <MyText style={styles.teamName}>{gameProps.team2}</MyText>
            <MyText style={styles.teamScore}>{gameProps.team2Score}</MyText>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.betShowSwitcher}
        onPress={() => setBetsCollapsed(!betsCollapsed)}
      >
        {betsCollapsed ? (
          <MyText>VER APOSTAS</MyText>
        ) : (
          <MyText>OCULTAR APOSTAS</MyText>
        )}

        {betsCollapsed ? (
          <Image source={downArrowIcon} />
        ) : (
          <Image source={upArrowIcon} />
        )}
      </TouchableOpacity>

      {!betsCollapsed && (
        <View>
          <FlatList
            horizontal
            data={[]}
            renderItem={() => <></>}
            style={{ width: "100%" }}
            contentContainerStyle={{ width: "100%" }}
            ListEmptyComponent={
              <FlatList
                data={betsResults}
                contentContainerStyle={{ width: "100%", gap: 10 }}
                style={{ width: "100%" }}
                ListHeaderComponent={
                  <View style={styles.headerContainer}>
                    <MyText style={styles.headerTextName}>NOME</MyText>
                    <MyText style={styles.headerText}>VITÓRIA</MyText>
                    <MyText style={styles.headerText}>PLACAR</MyText>
                    <MyText style={styles.headerText}>PONTOS</MyText>
                  </View>
                }
                renderItem={({ item }) => (
                  <View style={styles.betContainer}>
                    <View style={styles.betUserContainer}>
                      <Image style={styles.userPhoto} source={item.picture} />
                      <MyText>{item.name}</MyText>
                    </View>
                    <View style={styles.winIcon}>
                      <Image style={styles.icon} source={winIcon} />
                    </View>
                    <View style={styles.loseIcon}>
                      <Image style={styles.icon} source={loseIcon} />
                    </View>

                    <View style={styles.pointsContainer}>
                      <Image source={starIcon} />
                      <MyText>75</MyText>
                    </View>
                  </View>
                )}
              />
            }
          />
        </View>
      )}
    </View>
  );
}
