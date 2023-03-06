import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 300,
    zIndex: -1,
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 30,
    marginTop: 50,
  },
  bellIcon: {
    flex: 1,
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  profilePicture: {
    borderRadius: 10000,
    borderColor: THEME.COLORS.SOFT_GREEN,
    borderWidth: 4,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  statisticsContainer: {
    marginTop: 20,
    width: "90%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 5,
  },
  statisticsItem: {
    padding: 20,
    borderRightWidth: 0.5,
    borderColor: THEME.COLORS.GRAY,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: THEME.COLORS.DARK_GRAY,
    fontWeight: "bold",
  },
});
