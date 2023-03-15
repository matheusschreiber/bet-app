import { FlatList, LogBox, ScrollView, Text, View } from "react-native";
import { GroupCard } from "../GroupCard";

import { styles } from "./style";
import { MyText } from "../../MyText";
import { useContextValue } from "../../../services/contextElement";

export function Groups() {
  // useEffect(() => {
  //   LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  // }, []);

  const { user } = useContextValue();

  return (
    <View style={styles.groupsContainer}>
      <MyText style={styles.title}>Meus grupos de aposta</MyText>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{
          width: "100%",
        }}
        horizontal={true}
        data={[]}
        renderItem={() => <></>}
        ListEmptyComponent={
          <FlatList
            data={(user as any).groups}
            keyExtractor={(item) => item.group.id}
            style={{ width: "100%" }}
            renderItem={({ item }) => (
              <GroupCard
                id={item.group.id}
                idAdmin={item.group.id_admin}
                name={item.group.name}
                participants={item.group.participants}
                amount={`${item.group.participants.length} pessoas`}
                prize={item.group.prize}
              />
            )}
          />
        }
      />
    </View>
  );
}
