import { FlatList, LogBox, ScrollView, Text, View } from "react-native";
import { GroupCard } from "../GroupCard";

import { styles } from "./style";
import { MyText } from "../../MyText";
import { useEffect } from "react";
import { mainUser } from "../../../services/provisoryData";

export function Groups() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

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
            data={mainUser.myGroups}
            keyExtractor={(item) => item.id.toString()}
            style={{ width: "100%" }}
            renderItem={({ item }) => (
              <GroupCard
                name={item.name}
                participants={item.participants}
                amount={`${item.participants.length} pessoas`}
              />
            )}
          />
        }
      />
    </View>
  );
}
