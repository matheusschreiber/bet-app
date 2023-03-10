import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME.COLORS.GREEN,
    height: 150,
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50,
  },
  titleGroup: {
    fontSize: 20,
    alignSelf: "flex-start",
    width: "100%",
    textAlign: "center",

    fontFamily: "montserratBold",
    color: "white",
  },
  backIcon: {
    position: "absolute",
    left: 20,
    zIndex: 1000,
  },
  prizeContainer: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    marginTop: 30,
  },
  prizeFlexBox: {
    alignItems: "center",
  },
  prizeTitle: {
    fontSize: 14,
    fontFamily: "montserratMedium",
  },
  descPrize: {
    color: THEME.COLORS.GREEN,
    fontFamily: "montserratBold",
    fontSize: 20,
  },
  editContainer: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
