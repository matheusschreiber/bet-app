import { View, Image, TouchableOpacity, Text } from "react-native";
import { useContextValue } from "../../services/contextElement";
// import {
//   House,
//   PlusCircle,
//   SoccerBall,
//   Trophy,
//   User,
// } from "phosphor-react-native";
import { styles } from "./styles";

import home from "../../assets/icons/home.png";
import rankings from "../../assets/icons/rankings.png";
import add from "../../assets/icons/add.png";
import games from "../../assets/icons/games.png";
import account from "../../assets/icons/account.png";

import homeSelected from "../../assets/icons/home_selected.png";
import rankingsSelected from "../../assets/icons/rankings_selected.png";
import gamesSelected from "../../assets/icons/games_selected.png";
import accountSelected from "../../assets/icons/account_selected.png";

import { THEME } from "../../theme";
import { useNavigation } from "@react-navigation/native";

interface ItemProps {
  icon: ImageData;
  iconSelected: ImageData;
  page: string;
}

export function HomeBar() {
  const { selected, setSelected } = useContextValue();
  const navigation = useNavigation();

  // const icons = [
  //   <House color="#fff" size={35} />,
  //   <Trophy color="#fff" size={35} />,
  //   <PlusCircle color="#fff" size={50} weight="fill" />,
  //   <SoccerBall color="#fff" size={35} weight="fill" />,
  //   <User color="#fff" size={35} />,
  // ];

  // function checkSelected(item: JSX.Element, idx: number) {
  //   if (selected == idx) item.props.color = `${THEME.COLORS.GREEN}`;
  //   return item;
  // }

  function checkSelected(item: ItemProps, idx: number) {
    if (selected == idx) return item.iconSelected;
    else return item.icon;
  }

  const icons: ItemProps[] = [
    { icon: home, iconSelected: homeSelected, page: "home" },
    { icon: rankings, iconSelected: rankingsSelected, page: "rankings" },
    { icon: add, iconSelected: add, page: "add" },
    { icon: games, iconSelected: gamesSelected, page: "games" },
    { icon: account, iconSelected: accountSelected, page: "account" },
  ];

  return (
    <View style={styles.container}>
      {icons?.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.iconContainer}
          onPress={() => {
            setSelected(idx);
            navigation.navigate(item.page as any);
          }}
        >
          <Image source={checkSelected(item, idx)} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
