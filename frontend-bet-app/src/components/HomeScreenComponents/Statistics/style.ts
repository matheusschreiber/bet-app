import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  statisticsContainer: {
    marginTop: 20,
    width: "90%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 5,
    paddingHorizontal: 10,
  },
  statisticsItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRightWidth: 0.5,
    borderColor: THEME.COLORS.GRAY,
  },
  title: {
    fontSize: 18,
    fontFamily: "montserratBold",
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontFamily: "montserratMedium",
  },
  starIcon: {
    backgroundColor: THEME.COLORS.LIGHT_YELLOW,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ticketIcon: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  trophyIcon: {
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
