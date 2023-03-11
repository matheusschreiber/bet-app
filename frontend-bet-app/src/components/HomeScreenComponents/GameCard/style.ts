import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: 250,
    borderRadius: 20,
    marginLeft: 20,
  },
  descText: {
    backgroundColor: "black",
    borderRadius: 100,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: -10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.LIGHT_GRAY,
  },
  teamScoreText: {
    fontSize: 50,
    fontFamily: "montserratLight",
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
    height: 30,
    marginTop: 20,
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
