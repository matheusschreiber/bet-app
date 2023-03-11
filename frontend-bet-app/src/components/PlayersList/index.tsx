import { FlatList, ScrollView, View } from "react-native";
import { User } from "../../@types/navigation";
import { MyText } from "../MyText";

interface PlayerListProps {
  participants: User[];
}

export function PlayerList({ participants }: PlayerListProps) {
  return (
    <ScrollView horizontal={true}>
      <View>
        <View>
          <MyText>NOME</MyText>
          <MyText>ACERTOS</MyText>
          <MyText>PONTOS</MyText>
        </View>

        <FlatList
          data={participants}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              {/* <Image source={item.picture} /> */}
              <MyText>{item.name}</MyText>
              <MyText>{item.points}</MyText>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
