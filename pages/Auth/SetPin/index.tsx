import { StyleSheet, TouchableOpacity } from "react-native";

import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import OtpInput from "../../../components/OtpInput";
import { KeyPad, MainButton } from "../../../components";

type NavigationProps = AuthProps<AuthRoutes.SetPin>;

const SetPin: React.FC<NavigationProps> = ({ navigation }) => {
  const maximumCodeLength = 6;
  const [otpCode, setOtpCode] = useState<string>("");
  const [isCodeReady, setIsCodeReady] = useState<Boolean>(false);

  const getPinFromKeyPad = (pinCode: string) => {
    setOtpCode(pinCode);
  };

  useEffect(() => {
    if (isCodeReady) {
      //call code validation endpoint
    }
  }, [isCodeReady]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.image}>
            <Ionicons
              name="arrow-back-sharp"
              size={24}
              color={COLORS.Light.colorOne}
            />
          </TouchableOpacity>

          <Text style={styles.txt1}>
            {isCodeReady ? "Confirm 6-digit PIN" : "Create a 6-digit PIN"}
          </Text>
          <Text style={styles.txt2}>
            You’ll use this PIN to sign in and confirm transactions
          </Text>
          <View style={styles.otpContainer}>
            <OtpInput
              code={otpCode}
              setCode={setOtpCode}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsCodeReady}
            />
          </View>
          <View
            style={[styles.keypad, { marginTop: isCodeReady ? "2%" : "10%" }]}
          >
            <KeyPad
              maximumLength={maximumCodeLength}
              sendPin={getPinFromKeyPad}
            />
          </View>
          {isCodeReady && (
            <View style={styles.btn1Container}>
              <MainButton
                title={"Confirm"}
                onPressFunction={() => {}}
                err={false}
                btnStyle={styles.btn1}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SetPin;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.background,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    width: "100%",
    marginTop: "18%",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginBottom: 30,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
  },
  txt1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
    marginBottom: 8,
  },
  txt2: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix,
    fontWeight: "400",
  },
  otpContainer: {
    marginTop: 35,
    width: "100%",
  },
  keypad: {
    // borderWidth: 1,

    width: "90%",
    // height: "55%",
    alignSelf: "center",
  },
  btn1Container: { marginVertical: 20 },
  btn1: {
    borderRadius: 5,
  },
});
