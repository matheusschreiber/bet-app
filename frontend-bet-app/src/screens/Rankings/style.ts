import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    height: 300,
    width: "100%",
  },
  topContainer: {
    backgroundColor: "white",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginTop: 60,
    elevation: 20,
  },
  starIconContainerLarge: {
    backgroundColor: THEME.COLORS.LIGHT_YELLOW,
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  starIconLarge: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: THEME.COLORS.LIGHT_GREEN,
    borderRadius: 100,
    padding: 5,
  },
  rankingTitle: {
    fontFamily: "montserratBold",
    alignSelf: "flex-start",
    fontSize: 18,
    marginBottom: 10,
  },
  userProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  infoIconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  rightContainer: {
    width: "70%",
    marginLeft: 20,
  },
  listContainer: {
    width: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 40,
    paddingHorizontal: 5,
    elevation: 20,
  },
});
