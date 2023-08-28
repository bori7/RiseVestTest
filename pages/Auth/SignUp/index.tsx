import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { MainButton } from "../../../components";
import { COLORS, SIZES } from "../../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { updateUserState } from "../../../store/slices/user";

type NavigationProps = AuthProps<AuthRoutes.SignUp>;

const SignUp: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [proceed, setProceed] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const [passwordLength, setPasswordLength] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [oneUpper, setOneUpper] = useState<boolean>(false);
  const [isStrong, setIsStrong] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user);
  const { userLoading, userData, userError } = userState;

  useEffect(() => {
    if (!/[^a-zA-Z0-9]/g.test(password) && password !== " ") {
      setSpecial(false);
    } else {
      setSpecial(true);
    }
    if (password.length >= 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
    if (/.*[A-Z].*/.test(password)) {
      setOneUpper(true);
    } else {
      setOneUpper(false);
    }
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*\s])(?=.{8,})/;
    if (strongRegex.test(password)) {
      setIsStrong(false);
    } else {
      setIsStrong(true);
    }

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    // ACTIVATE  BUTTON
    if (
      !oneUpper ||
      !special ||
      !passwordLength ||
      // !isStrong ||
      !validEmail ||
      !password
    ) {
      setProceed(false);
    } else {
      setProceed(true);
    }
  }, [
    oneUpper,
    special,
    passwordLength,
    // isStrong,
    validEmail,
    password,
    email,
  ]);

  const signUp = () => {
    dispatch(
      updateUserState({
        ...userState,
        userError: null,
        userData: {
          // ...userData,
          email_address: email,
          password: password,
        },
      })
    );

    navigation?.navigate(AuthRoutes.TellUsMore);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.aware}
          >
            <Text style={styles.welcomeStyle}>Create an account</Text>
            <Text style={styles.subStyle}>
              Start building your dollar-denominated investment portfolio
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
                  selectionColor={
                    validEmail
                      ? COLORS.Light.colorOne
                      : COLORS.Light.colorFourteen
                  }
                  outlineColor={COLORS.Light.colorTwentySix}
                  activeOutlineColor={
                    validEmail
                      ? COLORS.Light.colorOne
                      : COLORS.Light.colorFourteen
                  }
                  value={email}
                  onChangeText={(val) => {
                    setEmail(val);
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
                  style={{ ...styles.inputContent }}
                  autoCapitalize="none"
                  onChangeText={(val) => {
                    setPassword(val);
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
              <View style={styles.checkList}>
                <View style={styles.checkItem}>
                  <CheckBox
                    disabled={false}
                    value={passwordLength}
                    color={COLORS.Light.colorOne}
                    onValueChange={(
                      newValue: boolean | ((prevState: boolean) => boolean)
                    ) => setPasswordLength(newValue)}
                    style={{
                      ...styles.checkBox,
                      borderWidth: passwordLength ? 4 : 1,
                    }}
                  />
                  <Text style={styles.checkText}>Minimum of 8 characters</Text>
                </View>
                <View style={styles.checkItem}>
                  <CheckBox
                    disabled={false}
                    value={oneUpper}
                    color={COLORS.Light.colorOne}
                    onValueChange={(
                      newValue: boolean | ((prevState: boolean) => boolean)
                    ) => setOneUpper(newValue)}
                    style={{
                      ...styles.checkBox,
                      borderWidth: oneUpper ? 4 : 1,
                    }}
                  />

                  <Text style={styles.checkText}>One UPPERCASE character</Text>
                </View>
                <View style={styles.checkItem}>
                  <CheckBox
                    disabled={false}
                    value={special}
                    color={COLORS.Light.colorOne}
                    onValueChange={(
                      newValue: boolean | ((prevState: boolean) => boolean)
                    ) => setSpecial(newValue)}
                    style={{
                      ...styles.checkBox,
                      borderWidth: special ? 4 : 1,
                    }}
                  />

                  <Text style={styles.checkText}>
                    One unique character (e.g: !@#$%^&*?)
                  </Text>
                </View>
              </View>
              <View style={styles.btn1Container}>
                <MainButton
                  title={"Sign Up"}
                  onPressFunction={() => {
                    signUp();
                  }}
                  err={false}
                  btnStyle={styles.btn1}
                  disabled={!proceed}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
  checkList: {
    alignItems: "flex-start",
  },
  checkText: {
    fontWeight: "300",
    textAlign: "center",
    color: COLORS.Light.colorFour,
    fontSize: 14,
    margin: 4,
  },
  checkItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    borderRadius: 10,
    width: 17,
    height: 17,

    marginRight: 5,
  },
});
