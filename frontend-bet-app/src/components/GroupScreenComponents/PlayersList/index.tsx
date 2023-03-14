import { FlatList, Image, ScrollView, View } from "react-native";
import { User } from "../../../@types/navigation";
import { MyText } from "../../MyText";

import { styles } from "./style";

import ticketIcon from "../../../../assets/icons/ticket_profile.png";
import starIcon from "../../../../assets/icons/star_profile.png";
import { useContextValue } from "../../../services/contextElement";

interface PlayerListProps {
  participants: User[];
}

export function PlayerList({ participants }: PlayerListProps) {
  const { isNewBetWindowCollapsed } = useContextValue();
  return (
    <View>
      <View style={styles.headerContainer}>
        <MyText style={styles.nameHeader}>NOME</MyText>
        <MyText>ACERTOS</MyText>
        <MyText>PONTOS</MyText>
      </View>

      {isNewBetWindowCollapsed && (
        <FlatList
          data={participants}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%" }}
          style={styles.flatListContainer}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={{ height: 500 }} />}
          renderItem={({ item, index }) => (
            <View style={styles.playerContainer}>
              <View style={styles.namePlayer}>
                <MyText style={styles.indexPlayer}>{index + 1}</MyText>
                <Image style={styles.playerPhoto} source={item.picture} />
                <MyText style={styles.playerName}>{item.name}</MyText>
              </View>
              <View style={styles.simpleContainer}>
                <Image source={ticketIcon} />
                <MyText style={styles.boldText}>{item.wins}</MyText>
              </View>

              <View style={styles.simpleContainer}>
                <Image source={starIcon} />
                <MyText style={styles.boldText}>{item.points}</MyText>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
