import { FlatList, ScrollView, Text, View } from "react-native";
import { User } from "../../@types/navigation";

interface PlayerListProps {
  participants: User[];
}

export function PlayerList({ participants }: PlayerListProps) {
  return (
    <ScrollView horizontal={true}>
      <View>
        <View>
          <Text>NOME</Text>
          <Text>ACERTOS</Text>
          <Text>PONTOS</Text>
        </View>

        <FlatList
          data={participants}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              {/* <Image source={item.picture} /> */}
              <Text>{item.name}</Text>
              <Text>{item.points}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
