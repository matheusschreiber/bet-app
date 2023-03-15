import { FlatList, Image, ScrollView, View } from "react-native";
import { User } from "../../../@types/navigation";
import { MyText } from "../../MyText";

import { styles } from "./style";

import ticketIcon from "../../../../assets/icons/ticket_profile.png";
import starIcon from "../../../../assets/icons/star_profile.png";
import { useContextValue } from "../../../services/contextElement";
import { leadingZeros } from "../../HomeScreenComponents/GameCard";

interface PlayerListProps {
  participants: { user: User }[];
  highlight?: User;
}

export function PlayerList({ participants, highlight }: PlayerListProps) {
  const { isNewBetWindowCollapsed } = useContextValue();
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.headerContainer}>
        <MyText style={styles.nameHeader}>NOME</MyText>
        <MyText style={styles.headerText}>ACERTOS</MyText>
        <MyText style={styles.headerText}>PONTOS</MyText>
      </View>

      {isNewBetWindowCollapsed && (
        <FlatList
          data={participants.sort((a, b) =>
            a.user.rank > b.user.rank ? 1 : -1
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%" }}
          style={styles.flatListContainer}
          keyExtractor={(item) => item.user.id}
          ListFooterComponent={<View style={{ height: 500 }} />}
          renderItem={({ item }) => (
            <View
              style={
                highlight && highlight.id == item.user.id
                  ? { ...styles.playerContainer, ...styles.highlighted }
                  : { ...styles.playerContainer }
              }
            >
              <View style={styles.namePlayer}>
                <MyText style={styles.indexPlayer}>
                  {leadingZeros(participants.indexOf(item) + 1)}
                </MyText>
                <Image
                  style={styles.playerPhoto}
                  source={{ uri: item.user.picture }}
                />
                <MyText style={styles.playerName}>{item.user.name}</MyText>
              </View>
              <View style={styles.simpleContainer}>
                <Image source={ticketIcon} />
                <MyText style={styles.boldText}>{item.user.wins}</MyText>
              </View>

              <View style={styles.simpleContainer}>
                <Image source={starIcon} />
                <MyText style={styles.boldText}>
                  {item.user.points.toLocaleString("pt-BR")}
                </MyText>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
