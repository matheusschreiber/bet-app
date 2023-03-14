import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  backIconContainer: {
    height: 50,
    width: 50,
    position: "absolute",
    alignItems: "center",
    zIndex: 1000,
  },
  headerContainer: {
    backgroundColor: THEME.COLORS.GREEN,
    height: 150,
    marginBottom: 50,
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
    left: 10,
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
  listSelector: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  listSelectorTitle: {
    fontFamily: "montserratBold",
    fontSize: 15,
    width: 180,
    textAlign: "center",
    borderBottomColor: "black",
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
});
