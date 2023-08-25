import { Platform, StyleSheet, TouchableOpacity } from "react-native";

import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";
import { TextInput } from "react-native-paper";
import { MainButton } from "../../../components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { formatDate } from "../../../shared/helper";

type NavigationProps = CreatePlanProps<CreatePlanRoutes.TargetDate>;

const TargetDate: React.FC<NavigationProps> = () => {
  const [proceed, setProceed] = useState<boolean>(false);

  const [selectedDob, setSelectedDob] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const fieldsFilled = () => {
    if (selectedDob !== "" && selectedDob !== " ") {
      setProceed(true);
    } else {
      setProceed(false);
    }
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

  useEffect(() => {
    fieldsFilled();
    // console.log("proceed::", proceed);
  }, [selectedDob]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.image}>
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color={COLORS.Light.colorOne}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Target date</Text>
          </View>
          <Text style={styles.subHeader}>Question 3 of 3</Text>
          <View style={styles.progressA}>
            <View style={[styles.progressB, { width: `${100}%` }]}></View>
          </View>
          <Text style={styles.subHeader2}>When do you want to withdraw?</Text>

          {Platform.OS === "android" ? (
            <View>
              <TextInput
                mode="outlined"
                // label={"Date of Birth"}
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
                    icon={"calendar-month"}
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
                // label={"Date of Birth"}
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
                    icon={"calendar-month"}
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
              onPressFunction={() => {}}
              err={false}
              btnStyle={styles.btn1}
              disabled={!proceed}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TargetDate;

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
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    textAlign: "center",
    // borderWidth: 1,
    fontSize: SIZES.sizeNine,
    fontWeight: "700",
    marginLeft: "10%",
  },
  image: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10%",
  },
  subHeader: {
    // borderWidth: 1,
    alignItems: "center",
    marginVertical: 20,
    // textAlign: "center",
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSeven,
  },
  progressA: {
    width: "100%",
    backgroundColor: COLORS.Light.colorSeven,
    height: 10,
    borderRadius: 10,
  },
  progressB: {
    backgroundColor: COLORS.Light.colorOne,
    height: 10,
    borderRadius: 10,
  },
  subHeader2: {
    alignItems: "center",
    marginTop: 60,
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven,
    fontWeight: "600",
    marginBottom: 30,
  },
  inputContent: {
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
    color: COLORS.Light.colorTwentySeven,
    width: "100%",
    backgroundColor: COLORS.Light.background,
    marginBottom: 18,
  },
  btn1Container: { marginVertical: 20 },
  btn1: {
    borderRadius: 5,
  },
});
