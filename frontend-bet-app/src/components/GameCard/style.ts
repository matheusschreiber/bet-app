import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: 250,
    borderRadius: 20,
    marginLeft: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.LIGHT_GRAY,
  },
  teamContainer: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 30,
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    borderRadius: 20,
    padding: 10,
  },
  vsText: {
    backgroundColor: THEME.COLORS.NEUTRAL_GRAY,
    padding: 5,
    borderRadius: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.LIGHT_GRAY,
    paddingHorizontal: 20,
  },
  infoText: {
    color: THEME.COLORS.DARK_GRAY,
    fontWeight: "300",
  },
  amountContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
  },
  amountText: {
    color: THEME.COLORS.DARK_GRAY,
    fontWeight: "300",
  },
});
