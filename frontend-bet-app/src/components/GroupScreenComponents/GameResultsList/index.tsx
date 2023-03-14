import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../../@types/navigation";
import { bets } from "../../../services/provisoryData";
import { GameCardLarge } from "../../GameCardLarge";

interface InputProps {
  games: GameProps[];
}

export function GameResultsList({ games }: InputProps) {
  const navigation = useNavigation();

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
        <TouchableOpacity
          onPress={() => navigation.navigate("gamebet", { ...item })}
        >
          <GameCardLarge
            gameProps={item}
            betsResults={bets.filter((bet) => bet.match === item.id)}
          />
        </TouchableOpacity>
      )}
    />
  );
}
