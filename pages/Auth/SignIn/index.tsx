import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import { COLORS, SIZES } from "../../../constants/Colors";
import { MainButton } from "../../../components";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";

type NavigationProps = AuthProps<AuthRoutes.SignIn>;

const SignIn: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [proceed, setProceed] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const fieldsFilled = () => {
    if (email !== "" && email !== " " && password !== "" && password !== " ") {
      setProceed(true);
    } else {
      setProceed(false);
    }
  };

  useEffect(() => {
    // console.log("email::", email);
    // console.log("password::", password);
    fieldsFilled();
    // console.log("proceed::", proceed);
  }, [email, password]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.aware}
          > */}
          <Text style={styles.welcomeStyle}>Welcome back</Text>
          <Text style={styles.subStyle}>
            Let’s get you logged in to get back to building your
            dollar-denominated investment portfolio.
          </Text>
          <View style={styles.input}>
            <View>
              <TextInput
                mode="outlined"
                label={"Email address"}
                // placeholder={"Email address"}
                placeholderTextColor={COLORS.Light.colorTwentySeven}
                textContentType="emailAddress"
                style={{ ...styles.inputContent }}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => fieldsFilled()}
                selectionColor={COLORS.Light.colorOne}
                outlineColor={COLORS.Light.colorTwentySix}
                activeOutlineColor={COLORS.Light.colorOne}
                value={email}
                onChangeText={(val) => {
                  setEmail(val);
                  fieldsFilled();
                }}
              />
            </View>
            <View>
              <TextInput
                mode="outlined"
                label={"Password"}
                // placeholder={"Password"}
                placeholderTextColor={COLORS.Light.colorTwentySeven}
                textContentType="password"
                value={password}
                secureTextEntry={hidePassword}
                selectionColor={COLORS.Light.colorOne}
                outlineColor={COLORS.Light.colorTwentySix}
                activeOutlineColor={COLORS.Light.colorOne}
                onBlur={() => fieldsFilled()}
                style={{ ...styles.inputContent }}
                autoCapitalize="none"
                onChangeText={(val) => {
                  setPassword(val);
                  fieldsFilled();
                }}
                right={
                  <TextInput.Icon
                    icon={hidePassword ? "eye-off" : "eye"}
                    color={COLORS.Light.colorOne}
                    onPress={() => setHidePassword(!hidePassword)}
                  />
                }
              />
            </View>
            <View style={styles.btn1Container}>
              <MainButton
                title={"Sign In"}
                onPressFunction={() => {}}
                err={false}
                btnStyle={styles.btn1}
                disabled={!proceed}
              />
            </View>
            <View style={styles.btn2Container}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.btn2}>I forgot my password</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
        <View style={styles.bottom}>
          <Text style={{ ...styles.btn2, color: COLORS.Light.colorTwentyFour }}>
            Don't have an account?
          </Text>
          <Text style={styles.btn2}> Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.background,
    flex: 1,
  },
  aware: {
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
    marginTop: "35%",
  },
  bottom: {
    // borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "10%",
  },
  welcomeStyle: {
    fontSize: SIZES.sizeSeven,
    marginBottom: 10,
    color: COLORS.Light.colorTwentyFive,
    fontWeight: "500",
  },
  subStyle: {
    fontSize: SIZES.sizeSix,
    marginBottom: 20,
    color: COLORS.Light.colorTwentyFour,
  },
  input: {
    // borderWidth: 1,
    width: "100%",
    // height: "70%",
    marginVertical: 20,
  },
  inputContainer: {
    // borderWidth: 1,
    borderColor: COLORS.Light.colorTwentySix,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  inputContent: {
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
    color: COLORS.Light.colorTwentySeven,
    width: "100%",
    backgroundColor: COLORS.Light.background,
    marginBottom: 18,
  },
  eyeIcon: {
    width: "100%",
    height: "100%",
  },
  btn1Container: { marginVertical: 20 },
  btn1: {
    borderRadius: 5,
  },
  btn2Container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  btn2: {
    color: COLORS.Light.colorOne,
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
  },
});
