import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  flatListContainer: {
    height: "100%",
    backgroundColor: "white",
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  playerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  nameHeader: {
    width: "40%",
    textAlign: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  namePlayer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "40%",
    alignItems: "center",
    gap: 10,
  },
  playerPhoto: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  indexPlayer: {
    marginLeft: -40,
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    padding: 5,
    borderRadius: 100,
  },
  playerName: {
    fontFamily: "montserratBold",
  },

  simpleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontFamily: "montserratBold",
    marginLeft: 5,
  },
});
