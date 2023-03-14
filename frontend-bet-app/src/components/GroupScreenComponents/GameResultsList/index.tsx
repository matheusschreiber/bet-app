import { FlatList, ScrollView, View } from "react-native";
import { GameProps } from "../../../@types/navigation";
import { GamesFinished, User } from "../../../services/provisoryData";
import { GameCardLarge } from "../../GameCardLarge";

interface InputProps {
  games: GameProps[];
}

export function GameResultsList({ games }: InputProps) {
  return (
    <FlatList
      data={games}
      contentContainerStyle={{
        gap: 20,
        width: "90%",
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{ height: 400 }} />}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <GameCardLarge
          gameProps={item}
          betsResults={User.myGroups[0].participants}
        />
      )}
    />
  );
}
