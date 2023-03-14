import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  flatListContainer: {
    height: "100%",
    backgroundColor: "white",
    paddingTop: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 40,
  },
  playerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingLeft: 50,
    gap: 10,
  },
  nameHeader: {
    width: "50%",
    textAlign: "center",
    fontSize: 10,
  },
  headerText: {
    fontSize: 10,
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginVertical: 20,
    gap: 10,
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
    width: 100,
  },

  simpleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
  },
  boldText: {
    fontFamily: "montserratBold",
    marginLeft: 5,
    fontSize: 12,
  },
  highlighted: {
    backgroundColor: THEME.COLORS.LIGHT_GRAY,
    borderRadius: 50,
    // paddingLeft: 20,
  },
});
