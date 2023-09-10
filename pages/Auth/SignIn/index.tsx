import {
  Keyboard,
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
import { MainRoutes } from "../../../shared/const/routerMain";
import { CommonActions, CompositeScreenProps } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { loginUser, updateUserState } from "../../../store/slices/user";
import { LoginUserRequestType } from "../../../shared/types/slices";

// type NavigationProps = AuthProps<AuthRoutes.SignIn>;

type NavigationProps = CompositeScreenProps<
  AuthProps<AuthRoutes.SignIn>,
  RootScreenProps<RootRoutes.Main>
>;

const SignIn: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [proceed, setProceed] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [allowEmailError, setAllowEmailError] = useState<boolean>(false);
  const [allowPasswordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorText, setPasswordErrorText] = useState<string>("");
  const [emailErrorText, setEmailErrorText] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const userState = useSelector((state: RootState) => state.user);
  const { userLoading, userData, userError } = userState;

  const fieldsFilled = () => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
      if (email) {
        setEmailErrorText("Please enter a valid email");
      } else {
        setEmailErrorText("Please provide an email");
      }
    }

    if (
      email !== "" &&
      email !== " " &&
      password !== "" &&
      password !== " " &&
      validEmail
    ) {
      setProceed(true);
    } else {
      setProceed(false);
    }
  };

  useEffect(() => {
    // console.log("email::", email);
    // console.log("password::", password);
    fieldsFilled();
    if (email && validEmail) {
      setEmailErrorText("");
    }
    if (password) {
      setPasswordErrorText("");
    } else {
      setPasswordErrorText("Please enter your password");
    }
    // console.log("proceed::", proceed);
  }, [email, password, validEmail]);

  const resetAction = CommonActions.reset({
    index: 1,
    routes: [
      {
        name: RootRoutes.Main,
        params: {
          screen: MainRoutes.Homepage,
        },
      },
    ],
  });

  const signIn = () => {
    dispatch(
      updateUserState({
        ...userState,
        userError: null,
        userData: {
          // ...userData,
          email_address: email.trim(),
          password: password,
        },
      })
    );
    const request: LoginUserRequestType = {
      email_address: email,
      password: password,
    };
    dispatch(loginUser(request));

    if (!userLoading && userError == null && userData?.token) {
      navigation.dispatch(resetAction);
    }
  };

  useEffect(() => {
    if (!userLoading && userError == null && userData?.token) {
      navigation.dispatch(resetAction);
    }
  }, [userData]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.aware}
          >
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
                  selectionColor={
                    // !validEmail && allowEmailError
                    // ? COLORS.Light.colorFourteen
                    // :
                    COLORS.Light.colorOne
                  }
                  outlineColor={
                    !validEmail && allowEmailError
                      ? COLORS.Light.colorFourteen
                      : COLORS.Light.colorTwentySix
                  }
                  activeOutlineColor={
                    // !validEmail && allowEmailError
                    // ? COLORS.Light.colorFourteen
                    // :
                    COLORS.Light.colorOne
                  }
                  value={email}
                  onChangeText={(val) => {
                    setEmail(val);
                    fieldsFilled();
                  }}
                />
                {allowEmailError && (
                  <Text style={styles.errorText}>{emailErrorText}</Text>
                )}
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
                  outlineColor={
                    !password && allowPasswordError
                      ? COLORS.Light.colorFourteen
                      : COLORS.Light.colorTwentySix
                  }
                  activeOutlineColor={COLORS.Light.colorOne}
                  onBlur={() => fieldsFilled()}
                  style={{ ...styles.inputContent }}
                  autoCapitalize="none"
                  onChangeText={(val) => {
                    setPassword(val);
                    fieldsFilled();
                  }}
                  onFocus={() => {
                    setAllowEmailError(true);
                  }}
                  right={
                    <TextInput.Icon
                      icon={hidePassword ? "eye-off" : "eye"}
                      color={COLORS.Light.colorOne}
                      onPress={() => setHidePassword(!hidePassword)}
                    />
                  }
                />
                {allowPasswordError && (
                  <Text style={styles.errorText}>{passwordErrorText}</Text>
                )}
              </View>
              <View style={styles.btn1Container}>
                <MainButton
                  title={"Sign In"}
                  onPressFunction={() => {
                    setAllowEmailError(true);
                    setPasswordError(true);
                    Keyboard.dismiss();
                    signIn();
                  }}
                  err={false}
                  btnStyle={styles.btn1}
                  disabled={!proceed || userLoading}
                  loading={userLoading}
                />
              </View>
              <View style={styles.btn2Container}>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.btn2}>I forgot my password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.bottom}>
          <Text style={{ ...styles.btn2, color: COLORS.Light.colorTwentyFour }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate(AuthRoutes.SignUp);
            }}
          >
            <Text style={styles.btn2}> Sign up</Text>
          </TouchableOpacity>
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
    alignSelf: "flex-end",
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
    marginVertical: 15,
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
    marginBottom: 8,
  },
  errorText: {
    color: COLORS.Light.colorFourteen,
    fontSize: SIZES.sizeFiveC,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 10,
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
