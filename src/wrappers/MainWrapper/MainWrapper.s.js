import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { appColors } from "../../styles/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: "#E9E9FF",
    flex: 1,
    position: "relative",
  },
  backButtonContainer: {
    zIndex: 100,
    padding: 10,
    height: wp(12),
    width: wp(12),
    position: "absolute",
    top: hp(3),
    left: 15,
    borderRadius: 50,
  },
  backButtonInner: {
    elevation: 6,
    backgroundColor: "#E6EEF8",
    borderRadius: 50,
    width: wp(10),
    alignItems: "center",
    justifyContent: "center",
    height: wp(10),
  },
  gradient: {},
  inner: {
    flex: 1,
  },
  title: {
    fontSize: hp(100) < 700 ? 24 : 28,
    fontFamily: "PoppinsBold",
    color: appColors.text,
    marginTop: hp(11),
    textAlign: "center",
  },
});
