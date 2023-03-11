import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  groupCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  groupImages: {
    flexDirection: "row",
  },
  groupTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "montserratMedium",
  },
  groupImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
    marginRight: -15,
  },
  groupContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    width: "100%",
  },
  groupSubTitle: {
    marginTop: 10,
    color: THEME.COLORS.DARK_GRAY,
    fontFamily: "montserratBold",
  },
});
