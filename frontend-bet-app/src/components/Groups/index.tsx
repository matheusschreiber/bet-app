import { Image, Text, View } from "react-native";
import { GroupCard } from "../GroupCard";

import { styles } from "./style";
import teste2 from "../../../assets/teste2.jpg";
import teste3 from "../../../assets/teste3.jpg";
import teste4 from "../../../assets/teste4.jpg";
import teste5 from "../../../assets/teste5.jpg";
import teste6 from "../../../assets/teste6.jpg";

export function Groups() {
  return (
    <View style={styles.groupsContainer}>
      <Text style={styles.title}>Meus grupos de aposta</Text>

      <GroupCard
        name="Amigos do trabalho"
        participants={[teste2, teste3, teste4, teste5, teste6]}
        amount="5 pessoas"
      />

      <GroupCard
        name="Família"
        participants={[teste2, teste3, teste4, teste5, teste6]}
        amount="5 pessoas"
      />

      <GroupCard
        name="Bairro"
        participants={[teste2, teste3, teste4, teste5, teste6]}
        amount="5 pessoas"
      />
    </View>
  );
}
