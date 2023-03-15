import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../../@types/navigation";
import { useContextValue } from "../../../services/contextElement";
import { GameCardLarge } from "../../GameCardLarge";

interface InputProps {
  games: { match: GameProps }[];
  participants?: string[];
}

export function GameResultsList({ games, participants }: InputProps) {
  const navigation = useNavigation();
  const { bets } = useContextValue();

  return (
    <FlatList
      data={games.sort((a, b) => (a.match.date < b.match.date ? 1 : -1))}
      contentContainerStyle={{
        gap: 20,
        width: "90%",
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ height: 400 }} />}
      keyExtractor={(item) => item.match.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("gamebet", {
              game: item.match,
              bets: bets.filter(({ bet }) => bet.id_match === item.match.id),
            })
          }
        >
          <GameCardLarge
            gameProps={item.match}
            betsResults={bets
              .filter(
                ({ bet }) =>
                  bet.id_match == item.match.id &&
                  (participants ? participants?.includes(bet.id_user) : true)
              )
              .sort((a, b) => (a.bet.points < b.bet.points ? 1 : -1))}
          />
        </TouchableOpacity>
      )}
    />
  );
}
