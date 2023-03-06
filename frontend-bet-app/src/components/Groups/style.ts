import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontWeight: "bold",
  },
  groupsContainer: {
    width: "90%",
    marginTop: 20,
  },
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
    fontWeight: "500",
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
    elevation: 2,
  },
});
