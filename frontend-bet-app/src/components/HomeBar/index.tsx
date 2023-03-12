import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { useContextValue } from "../../services/contextElement";
import { styles } from "./styles";

import home from "../../../assets/icons/home.png";
import rankings from "../../../assets/icons/rankings.png";
import add from "../../../assets/icons/add.png";
import games from "../../../assets/icons/games.png";
import account from "../../../assets/icons/account.png";

import homeSelected from "../../../assets/icons/home_selected.png";
import rankingsSelected from "../../../assets/icons/rankings_selected.png";
import gamesSelected from "../../../assets/icons/games_selected.png";
import accountSelected from "../../../assets/icons/account_selected.png";

import { THEME } from "../../theme";
import { useNavigation } from "@react-navigation/native";

interface ItemProps {
  key: number;
  icon: ImageData;
  iconSelected: ImageData;
  page: string;
}

export function HomeBar() {
  const { selected, setSelected } = useContextValue();
  const navigation = useNavigation();

  function checkSelected(item: ItemProps, idx: number) {
    if (selected == idx) return item.iconSelected;
    else return item.icon;
  }

  const icons: ItemProps[] = [
    { key: 1, icon: home, iconSelected: homeSelected, page: "home" },
    {
      key: 2,
      icon: rankings,
      iconSelected: rankingsSelected,
      page: "rankings",
    },
    { key: 3, icon: add, iconSelected: add, page: "add" },
    { key: 4, icon: games, iconSelected: gamesSelected, page: "games" },
    { key: 5, icon: account, iconSelected: accountSelected, page: "account" },
  ];

  return (
    <View style={styles.topContainer}>
      <FlatList
        data={icons}
        keyExtractor={(item) => String(item.key)}
        style={{ flexDirection: "row" }}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item.key);
              navigation.navigate(item.page as any);
            }}
          >
            <Image source={checkSelected(item, item.key)} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
