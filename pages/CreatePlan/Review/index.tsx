import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { MainButton } from "../../../components";

type NavigationProps = CreatePlanProps<CreatePlanRoutes.Review>;

const Review: React.FC<NavigationProps> = () => {
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
            <Text style={styles.headerText}>Review</Text>
          </View>

          <View style={styles.subHeader}>
            <Text style={styles.subHeaderR1}>Kate Ventures</Text>
            <Text style={styles.subHeaderR2}>$10,930.75</Text>
            <Text style={styles.subHeaderR3}>by 20 June 2021</Text>
            <View style={styles.subHeaderR4}>
              <View style={styles.subHeaderC}>
                <View style={styles.subHeaderD1}></View>
                <Text style={styles.subHeaderC1}>Investments • $50,400</Text>
              </View>
              <View style={styles.subHeaderC}>
                <View style={styles.subHeaderD2}></View>
                <Text style={styles.subHeaderC1}>Returns • $20,803</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        <View style={styles.chart}></View>
        <View style={styles.containerB}>
          <View style={styles.bR1}>
            <Text style={styles.bR1t1}>Estimated monthly investment</Text>
            <Text style={styles.bR1t2}>$120</Text>
          </View>
          <View style={styles.bR2}></View>
          <View style={styles.bR3}>
            {/* <View style={styles.bR3a}> */}
            <MaterialCommunityIcons
              name="information-outline"
              size={26}
              color={COLORS.Light.colorOne}
            />
            {/* </View> */}
            <View style={styles.bR3b}>
              <Text style={styles.bR3bt1}>
                Returns not guaranteed. Investing involves risk. Read our
                Disclosures.
              </Text>
            </View>
          </View>
          <View style={styles.bR4}>
            <Text style={styles.bR4t1}>
              These are your starting settings, they can always be updated.
            </Text>
          </View>

          <View style={styles.bR5}>
            <View style={styles.btn1Container}>
              <MainButton
                title={"Agree & Continue"}
                onPressFunction={() => {
                  // navigation?.navigate(AuthRoutes.SignUp);
                }}
                err={false}
                btnStyle={styles.btn1}
                textStyle={styles.btn1text}
              />
            </View>
            <View style={styles.btn2Container}>
              <MainButton
                title={"Start over"}
                onPressFunction={() => {
                  // navigation?.navigate(AuthRoutes.SignIn);
                }}
                err={false}
                btnStyle={styles.btn2}
                textStyle={styles.btn2text}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.background,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 25,
  },

  top: {
    // flex: 1,
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
    marginRight: "14%",
  },
  subHeader: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeaderR1: {
    fontSize: SIZES.sizeSix,
    color: COLORS.Light.colorTwentyFour,
    marginBottom: 5,
  },
  subHeaderR2: {
    fontSize: SIZES.sizeTen,
    color: COLORS.Light.colorTwentyFive,
    marginBottom: 6,
    fontWeight: "700",
  },
  subHeaderR3: {
    fontSize: SIZES.sizeSeven,
    color: COLORS.Light.colorTwentyFive,
    marginBottom: 20,
  },
  subHeaderR4: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  subHeaderC: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  subHeaderC1: {
    justifyContent: "space-between",
    fontSize: SIZES.sizeSix,
  },
  subHeaderD1: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.Light.colorSix,
    borderRadius: 10,
    marginRight: 5,
  },
  subHeaderD2: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.Light.colorOne,
    borderRadius: 10,
    marginRight: 5,
  },
  chart: {
    marginTop: 35,
    height: 250,
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
  },
  containerB: {
    // borderWidth: 1,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 25,
  },
  bR1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bR1t1: {
    fontSize: SIZES.sizeSeven,
    color: COLORS.Light.colorTwentyFour,
    marginBottom: 6,
    fontWeight: "400",
  },
  bR1t2: {
    fontSize: SIZES.sizeSixB,
    color: COLORS.Light.colorTwentyFive,
    marginBottom: 6,
    fontWeight: "500",
  },
  bR2: {
    borderTopWidth: 2,
    borderTopColor: COLORS.Light.colorSeven,
    marginBottom: 28,
  },
  bR3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 15,
    backgroundColor: COLORS.Light.colorSeven,
    borderRadius: 10,
    alignItems: "center",
  },
  bR3a: {
    backgroundColor: "transparent",
    marginRight: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  bR3b: {
    backgroundColor: "transparent",
    marginLeft: 20,
    flex: 1,
  },
  bR3bt1: {
    flexWrap: "wrap",
    fontSize: SIZES.sizeSixB,
    color: COLORS.Light.colorTwentyFour,
  },
  bR4: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 18,
  },
  bR4t1: {
    textAlign: "center",
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix,
  },
  bR5: {},
  swipes: {
    width: "100%",
    marginTop: 25,
    height: 50,
    backgroundColor: COLORS.Light.colorTwelve,
  },
  btn1Container: { marginVertical: 5 },
  btn1: {
    borderRadius: 5,
  },
  btn1text: {
    // color: COLORS.Light.colorThirteen,
    fontSize: SIZES.sizeSix,
  },
  btn2Container: { marginVertical: 5 },
  btn2: {
    borderRadius: 5,
    backgroundColor: COLORS.Light.colorSeven,
  },
  btn2text: {
    color: COLORS.Light.colorThirteen,
    fontSize: SIZES.sizeSix,
  },
  scroll: {
    // borderWidth: 1,
    width: "100%",
    // marginTop: 10,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  scrollContent: {
    // borderWidth: 1,
    // width: "100%",
    // alignItems: "center",
    backgroundColor: "transparent",
    // marginBottom: 20,
  },
});
