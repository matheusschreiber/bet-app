import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: "transparent",
    height: "100%",
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: "white",
    position: "absolute",
    bottom: "15%",
    padding: 20,
    borderRadius: 20,
    elevation: 30,
    gap: 20,
  },
  iconContainer: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemTitle: {
    fontFamily: "montserratBold",
  },
});
