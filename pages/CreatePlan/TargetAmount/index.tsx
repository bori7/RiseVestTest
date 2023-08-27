import { StyleSheet, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import { Text, View } from "../../../components/Themed";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";
import { TextInput } from "react-native-paper";
import { MainButton } from "../../../components";

type NavigationProps = CreatePlanProps<CreatePlanRoutes.TargetAmount>;

const TargetAmount: React.FC<NavigationProps> = ({ navigation }) => {
  const [amount, setAmount] = useState<string>("");
  const [proceed, setProceed] = useState<boolean>(false);

  const fieldsFilled = () => {
    if (amount !== "" && amount !== " ") {
      setProceed(true);
    } else {
      setProceed(false);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                navigation.navigate(CreatePlanRoutes.GoalName);
              }}
            >
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color={COLORS.Light.colorOne}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Target amount</Text>
          </View>
          <Text style={styles.subHeader}>Question 2 of 3</Text>
          <TouchableOpacity style={styles.progressA}>
            <View style={[styles.progressB, { width: `${66}%` }]}></View>
          </TouchableOpacity>
          <Text style={styles.subHeader2}>How much do need?</Text>

          <View>
            <TextInput
              mode="outlined"
              // label={"Email address"}
              placeholder={"840,000.00"}
              placeholderTextColor={COLORS.Light.colorTwentySeven}
              // textContentType="emailAddress"
              style={{ ...styles.inputContent }}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => fieldsFilled()}
              selectionColor={COLORS.Light.colorOne}
              outlineColor={COLORS.Light.colorTwentySix}
              activeOutlineColor={COLORS.Light.colorOne}
              value={amount}
              onChangeText={(val) => {
                setAmount(val);
                fieldsFilled();
              }}
              left={
                <TextInput.Icon
                  icon={"currency-ngn"}
                  color={COLORS.Light.colorOne}
                />
              }
            />
          </View>
          <View style={styles.btn1Container}>
            <MainButton
              title={"Continue"}
              onPressFunction={() => {
                navigation.navigate(CreatePlanRoutes.TargetDate);
              }}
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

export default TargetAmount;

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
