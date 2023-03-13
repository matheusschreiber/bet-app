import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  scrollViewContainer: {
    width: "100%",
  },
  mainContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  topContainer: {
    backgroundColor: "black",
    paddingTop: 50,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIconContainer: {
    position: "absolute",
    right: 10,
    top: 50,
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    flex: 1,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  containerTitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "montserratBold",
  },
  formContainer: {
    width: 400,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    width: "80%",
    height: 50,
    paddingLeft: 20,
  },
  textInputUserList: {
    width: "80%",
    height: 50,
    marginLeft: 20,
  },
  formTitle: {
    width: "80%",
    marginBottom: 10,
    fontFamily: "montserratBold",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "80%",
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: THEME.COLORS.BLUE,
    color: "white",
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  userSearchListContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    width: "80%",
  },
  magnifyingIcon: {
    marginLeft: 20,
  },
  userListContainer: {
    width: "80%",
    marginTop: 10,
  },
  userListTitle: {
    fontFamily: "montserratBold",
    color: THEME.COLORS.DARK_GRAY,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userName: {
    fontFamily: "montserratMedium",
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userPhotoAndNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    height: 50,
    width: 50,
    alignItems: "center",
  },
  inviteIcon: {
    flex: 1,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  checkIcon: {
    flex: 1,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  buttonContainerFinalPhase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  buttonTextCancel: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: THEME.COLORS.DARK_GRAY,
    color: THEME.COLORS.DARK_GRAY,
    fontFamily: "montserratBold",
  },
  prizeIcon: {
    marginBottom: 20,
  },
});
