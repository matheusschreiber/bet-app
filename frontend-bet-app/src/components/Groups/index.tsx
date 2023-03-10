import { FlatList, View } from "react-native";
import { GroupCard } from "../GroupCard";

import { styles } from "./style";
import teste2 from "../../../assets/teste2.jpg";
import teste3 from "../../../assets/teste3.jpg";
import teste4 from "../../../assets/teste4.jpg";
import teste5 from "../../../assets/teste5.jpg";
import teste6 from "../../../assets/teste6.jpg";
import { MyText } from "../MyText";

const groups = [
  {
    id: "123",
    name: "Amigos do trabalho",
    participants: [
      { id: 1, name: "João", picture: teste2, points: 25 },
      { id: 2, name: "Karla", picture: teste3, points: 15 },
      { id: 3, name: "Jonas", picture: teste4, points: 10 },
      { id: 4, name: "Jorge", picture: teste5, points: 7 },
      { id: 5, name: "Elisa", picture: teste6, points: 7 },
    ],
  },
  {
    id: "124",
    name: "Família",
    participants: [
      { id: 1, name: "João", picture: teste2, points: 25 },
      { id: 2, name: "Karla", picture: teste3, points: 15 },
      { id: 3, name: "Jonas", picture: teste4, points: 10 },
      { id: 4, name: "Jorge", picture: teste5, points: 7 },
      { id: 5, name: "Elisa", picture: teste6, points: 7 },
    ],
  },
  {
    id: "125",
    name: "Bairro",
    participants: [
      { id: 1, name: "João", picture: teste2, points: 25 },
      { id: 2, name: "Karla", picture: teste3, points: 15 },
      { id: 3, name: "Jonas", picture: teste4, points: 10 },
      { id: 4, name: "Jorge", picture: teste5, points: 7 },
      { id: 5, name: "Elisa", picture: teste6, points: 7 },
    ],
  },
];

export function Groups() {
  return (
    <View style={styles.groupsContainer}>
      <MyText style={styles.title}>Meus grupos de aposta</MyText>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupCard
            name={item.name}
            participants={item.participants}
            amount={`${item.participants.length} pessoas`}
          />
        )}
      />
    </View>
  );
}
