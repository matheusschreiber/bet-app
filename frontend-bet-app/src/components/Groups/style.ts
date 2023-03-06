import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontWeight: "bold",
  },
  groupsContainer: {
    width: "90%",
    marginTop: 20,
  },
});
