import { View, Image, TouchableOpacity, Text } from "react-native";
import { useContextValue } from "../../services/contextElement";
import {
  House,
  PlusCircle,
  SoccerBall,
  Trophy,
  User,
} from "phosphor-react-native";
import { styles } from "./styles";

import { THEME } from "../../theme";

export function HomeBar() {
  const { selected, setSelected } = useContextValue();

  const icons = [
    <House color="#fff" size={35} />,
    <Trophy color="#fff" size={35} />,
    <PlusCircle color="#fff" size={50} weight="fill" />,
    <SoccerBall color="#fff" size={35} weight="fill" />,
    <User color="#fff" size={35} />,
  ];

  function checkSelected(item: JSX.Element, idx: number) {
    if (selected == idx) item.props.color = `${THEME.COLORS.GREEN}`;
    return item;
  }

  return (
    <View style={styles.container}>
      {icons?.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.iconContainer}
          onPress={() => setSelected(idx)}
        >
          {checkSelected(item, idx)}
        </TouchableOpacity>
      ))}
    </View>
  );
}
