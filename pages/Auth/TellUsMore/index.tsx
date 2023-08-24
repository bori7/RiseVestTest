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
import { CountryPicker, MainButton } from "../../../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { formatDate } from "../../../shared/helper";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { MainProps, MainRoutes } from "../../../shared/const/routerMain";
import { CompositeScreenProps, CommonActions } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";

type NavigationProps = CompositeScreenProps<
  AuthProps<AuthRoutes.TellUsMore>,
  RootScreenProps<RootRoutes.Main>
>;

const TUM: React.FC<NavigationProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [msisdn, setMsisdn] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [proceed, setProceed] = useState<boolean>(false);
  const [countryId, setCountryId] = useState<number>(0);
  const [selectedDob, setSelectedDob] = useState<string>("");
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePickerIOS = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = formatDate(selectedDate);
    setSelectedDob(formattedDate);

    hideDatePicker();

    setTimeout(() => {}, 2000);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = formatDate(selectedDate);
    setSelectedDob(currentDate);
  };

  const eighteenYearsAgo = new Date();
  const minDate = new Date().setFullYear(eighteenYearsAgo.getFullYear() - 60);
  const formattedMaxDate = new Date();
  const formattedMinDate = new Date(minDate);

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onDateChange,
      mode: currentMode,
      is24Hour: true,
      maximumDate: formattedMaxDate,
    });
  };

  const showDatePickerAndroid = () => {
    showMode("date");
  };

  const getChosenCountryId = (countryIdFromComp: number): void => {
    setCountryId(countryIdFromComp);
  };

  const fieldsFilled = () => {
    let varList = [firstName, lastName, nickName, msisdn, date];

    for (let v of varList) {
      if (!(v !== "" && v !== " ")) {
        setProceed(false);
        break;
      }
      setProceed(true);
    }
  };

  useEffect(() => {
    // console.log("email::", email);
    // console.log("password::", password);
    fieldsFilled();
    // console.log("proceed::", proceed);
  }, [firstName, lastName, nickName, msisdn, date]);

  // navigation?.navigate(RootRoutes.Main, {
  //   screen: MainRoutes.Success,
  //   params: {
  //     mainText: "You just created your Rise account",
  //     subText: "Welcome to Rise, let’s take you home",
  //     btnText: "Okay",
  //   },
  // });

  const resetAction = CommonActions.reset({
    index: 1,
    routes: [
      // { name: "Home" }, // Navigate to Home tab
      {
        name: RootRoutes.Main,
        params: {
          screen: MainRoutes.Success,
          params: {
            mainText: "You just created your Rise account",
            subText: "Welcome to Rise, let’s take you home",
            btnText: "Okay",
          },
        },
      },
    ],
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.aware}
          >
            <Text style={styles.welcomeStyle}>Tell Us More About You</Text>
            <Text style={styles.subStyle}>
              Please use your name as it appears on your ID.
            </Text>
            <View style={styles.input}>
              <View>
                <TextInput
                  mode="outlined"
                  label={"Legal First Name"}
                  placeholderTextColor={COLORS.Light.colorTwentySeven}
                  textContentType="name"
                  style={{ ...styles.inputContent }}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => fieldsFilled()}
                  selectionColor={COLORS.Light.colorOne}
                  outlineColor={COLORS.Light.colorTwentySix}
                  activeOutlineColor={COLORS.Light.colorOne}
                  value={firstName}
                  onChangeText={(val) => {
                    setFirstName(val);
                    fieldsFilled();
                  }}
                />
              </View>
              <View>
                <TextInput
                  mode="outlined"
                  label={"Legal Last Name"}
                  placeholderTextColor={COLORS.Light.colorTwentySeven}
                  textContentType="familyName"
                  value={lastName}
                  selectionColor={COLORS.Light.colorOne}
                  outlineColor={COLORS.Light.colorTwentySix}
                  activeOutlineColor={COLORS.Light.colorOne}
                  onBlur={() => fieldsFilled()}
                  style={{ ...styles.inputContent }}
                  autoCapitalize="none"
                  onChangeText={(val) => {
                    setLastName(val);
                    fieldsFilled();
                  }}
                />
              </View>
              <View>
                <TextInput
                  mode="outlined"
                  label={"Nick name"}
                  placeholderTextColor={COLORS.Light.colorTwentySeven}
                  textContentType="nickname"
                  style={{ ...styles.inputContent }}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => fieldsFilled()}
                  selectionColor={COLORS.Light.colorOne}
                  outlineColor={COLORS.Light.colorTwentySix}
                  activeOutlineColor={COLORS.Light.colorOne}
                  value={nickName}
                  onChangeText={(val) => {
                    setNickName(val);
                    fieldsFilled();
                  }}
                />
              </View>
              <View style={styles.countryContainer}>
                <CountryPicker handleChosenCountry={getChosenCountryId} />
                <View style={styles.divider} />
                <TextInput
                  label={"Phone Number"}
                  mode="outlined"
                  placeholderTextColor={COLORS.Light.colorTwentySeven}
                  textContentType="telephoneNumber"
                  keyboardType="phone-pad"
                  value={msisdn}
                  selectionColor={COLORS.Light.colorOne}
                  outlineColor={COLORS.Light.colorTwentySix}
                  activeOutlineColor={COLORS.Light.colorOne}
                  onBlur={() => fieldsFilled()}
                  style={{ ...styles.msisdnInput }}
                  autoCapitalize="none"
                  onChangeText={(val) => {
                    setMsisdn(val);
                    fieldsFilled();
                  }}
                />
              </View>

              {Platform.OS === "android" ? (
                <View>
                  <TextInput
                    mode="outlined"
                    label={"Date of Birth"}
                    placeholder={"Choose date"}
                    placeholderTextColor={COLORS.Light.colorTwentySeven}
                    value={selectedDob}
                    editable={false}
                    selectionColor={COLORS.Light.colorOne}
                    outlineColor={COLORS.Light.colorTwentySix}
                    activeOutlineColor={COLORS.Light.colorOne}
                    style={{ ...styles.inputContent }}
                    autoCapitalize="none"
                    right={
                      <TextInput.Icon
                        icon={"calendar"}
                        color={COLORS.Light.colorOne}
                        onPress={showDatePickerAndroid}
                      />
                    }
                  />
                </View>
              ) : (
                <View>
                  <TextInput
                    mode="outlined"
                    label={"Date of Birth"}
                    placeholder={"Choose date"}
                    placeholderTextColor={COLORS.Light.colorTwentySeven}
                    value={selectedDob}
                    selectionColor={COLORS.Light.colorOne}
                    outlineColor={COLORS.Light.colorTwentySix}
                    activeOutlineColor={COLORS.Light.colorOne}
                    style={{ ...styles.inputContent }}
                    autoCapitalize="none"
                    right={
                      <TextInput.Icon
                        icon={"calendar"}
                        color={COLORS.Light.colorOne}
                        onPress={showDatePickerIOS}
                      />
                    }
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    locale="en_GB"
                    date={date}
                    testID="dateTimePicker"
                    is24Hour
                    minimumDate={formattedMinDate}
                    maximumDate={formattedMaxDate}
                  />
                </View>
              )}
              <View style={styles.btn1Container}>
                <MainButton
                  title={"Continue"}
                  onPressFunction={() => {
                    // navigation?.navigate(RootRoutes.Main, {
                    //   screen: MainRoutes.Success,
                    //   params: {
                    //     mainText: "You just created your Rise account",
                    //     subText: "Welcome to Rise, let’s take you home",
                    //     btnText: "Okay",
                    //   },
                    // });

                    navigation.dispatch(resetAction);
                  }}
                  err={false}
                  btnStyle={styles.btn1}
                  disabled={!proceed}
                />
              </View>
              <View style={styles.btn2Container}>
                <Text
                  style={{
                    ...styles.btn2,
                    color: COLORS.Light.colorFour,
                  }}
                >
                  {`By clicking Continue, you agree to our `}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.btn2}>Terms of Service</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.btn2,
                    color: COLORS.Light.colorFour,
                  }}
                >
                  {` and `}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.btn2}>Privacy Policy.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

export default TUM;

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
  msisdnInput: {
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
    color: COLORS.Light.colorTwentySeven,
    flex: 1,
    backgroundColor: COLORS.Light.background,
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
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn2: {
    color: COLORS.Light.colorOne,
    fontSize: SIZES.sizeSix,
    fontWeight: "300",
  },

  divider: {
    height: "80%",
    borderColor: COLORS.Light.colorTwentySix,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginHorizontal: 5,
    marginTop: 3,
  },
  textInput: {
    flex: 2,
  },
  countryContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const CountryPickerInput = () => {
  return (
    <View style={styles.countryContainer}>
      <TextInput
        label={`Phone Number `}
        keyboardType="phone-pad"
        mode="outlined"
        style={styles.textInput}
      />
    </View>
  );
};
