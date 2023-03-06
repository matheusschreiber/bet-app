import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gamesContainer: {
    width: "100%",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  gamesTitle: {
    fontSize: 20,
    fontFamily: "montserratBold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backArrowContainer: {
    height: 15,
  },
  backArrow: {
    flex: 1,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
