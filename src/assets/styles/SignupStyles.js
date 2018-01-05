import { Dimensions } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const centeredContentView = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0e0f10"
};

export const centeredForm = {
  width: WIDTH / 2,
  top: 50
};

export const schoolInput = {
  borderBottomColor: "white",
  color: "white",
  alignSelf: "center",
  fontWeight: "600"
};

export const signupInputContainer = {
  borderBottomWidth: 1.5,
  borderBottomColor: "white",
  marginBottom: 20,
  paddingBottom: 10,
  width: WIDTH / 1.8,
  alignSelf: "center",
  zIndex: 0
};

export const accesCodeInput = {
  width: "100%",
  borderBottomColor: "white",
  color: "white",
  alignSelf: "center",
  fontSize: 18,
  textAlign: "center",
  fontWeight: "500"
};
