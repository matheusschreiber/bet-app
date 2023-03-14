import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { GameProps } from "../../../@types/navigation";
import { GamesFinished, User } from "../../../services/provisoryData";
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
            betsResults={User.myGroups[0].participants}
          />
        </TouchableOpacity>
      )}
    />
  );
}
