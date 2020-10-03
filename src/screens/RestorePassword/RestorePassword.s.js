import { StyleSheet } from "react-native";
import { appColors } from "../../styles/styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import React from "react";

export default StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: wp(50),
    // height: wp(50),
    height: hp(100) <= 700 ? 120 : wp(40),
    resizeMode: "contain",
  },
  infoContainer: {
    width: "100%",
    padding: 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  secondaryText: {
    marginVertical: 10,
    textAlign: "center",
    color: appColors.text,
    fontFamily: "PoppinsRegular",
  },
  linkContainer: {
    position: "relative",
    marginLeft: 10,
  },
  linkText: {
    textAlign: "right",
    fontFamily: "PoppinsBold",
  },
  border: {
    width: "100%",
    position: "absolute",
    height: 1,
    backgroundColor: "#00000080",
    bottom: 6,
    right: 0,
  },
});
