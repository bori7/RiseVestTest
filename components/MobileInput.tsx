import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS, SIZES } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const MobileInput = ({
  phoneNo,
  setPhoneNo,
  setErrPhoneNumber,
  phoneLabel,
  route,
  navigateScreen,
}: any) => {
  const [cntry, setCntry] = useState({
    countryName: "Burkina Faso",
    countryCode: "BF",
    phoneCode: "226",
    locale: "fr-BF",
    countryFlag: "🇧🇫 ",
    countryCcy: "CFA",
    currency: "CFA",
  });
  const navigation = useNavigation<any>();
  useEffect(() => {
    if (route?.params?.cntry) {
      setCntry(route?.params?.cntry);
    }
  }, [route?.params?.cntry]);
  return (
    <View style={styles.inputContainer}>
      <View
        style={{
          width: "25%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SetCountryScreen", {
              navigateScreen: navigateScreen,
              countryHeader: "Select Country",
            });
            Keyboard.dismiss();
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 5,
              height: 50,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: COLORS.Light.colorFour,
            }}
          >
            <Text style={{ fontSize: 22 }}>{cntry?.countryFlag}</Text>
            <Text
              style={{
                fontSize: SIZES.sizeSeven,
                color: COLORS.Light.colorSix,
              }}
            >
              +{cntry?.phoneCode}
            </Text>
          </View>
          <View></View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "75%",
          height: 60,
        }}
      >
        <TextInput
          label={phoneLabel}
          value={phoneNo}
          onChangeText={(txt) => {
            setPhoneNo(txt);
            setErrPhoneNumber("");
          }}
          mode="outlined"
          style={{
            backgroundColor: COLORS.Light.colorFour,
            fontSize: SIZES.sizeSix,

            borderColor: COLORS.Light.colorThree,
          }}
          textColor={COLORS.Light.colorSixteen}
          underlineColor={COLORS.Light.colorTen}
          outlineColor={COLORS.Light.colorTwentyTwo}
          activeOutlineColor={COLORS.Light.colorThree}
          activeUnderlineColor={COLORS.Light.colorThree}
          underlineStyle={{ marginHorizontal: 15 }}
          keyboardType="numeric"
          returnKeyType={Platform.OS === "ios" ? "done" : "next"}
          autoCorrect={false}
          maxLength={10}
        />
      </View>
    </View>
  );
};

export default MobileInput;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },

  signUpTextOne: {
    fontSize: SIZES.sizeSeven,
    color: COLORS.Light.colorOne,
    fontWeight: "600",
    marginTop: Platform.OS === "ios" ? "2%" : "5%",
  },

  signUpTextTwo: {
    marginVertical: 10,
    fontSize: SIZES.sizeFive,
    color: COLORS.Light.colorTen,
    fontWeight: "400",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#fff",
    fontSize: SIZES.sizeFive,
  },

  button: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 5,
  },
});
