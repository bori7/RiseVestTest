import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

type NavigationProps = CreatePlanProps<CreatePlanRoutes.PlanDetails>;

const PlanDetails: React.FC<NavigationProps> = () => {
  const infoList = [
    { title: "Total earnings", value: "$12,000.09" },
    { title: "Current earnings", value: "$12,000.09" },
    { title: "Deposit value", value: "$50,543.05" },
    { title: "Balance in Naira (*₦505)", value: "₦31,918,837.5" },
    { title: "Plan created on", value: "23rd July, 2019" },
    { title: "Maturity date", value: "24th July 2022" },
  ];

  const transactions = [
    {
      flow: "+",
      detail: "Received from Bank Account (BOSUN TONY ADEMOSU)",
      amount: "+$320.90",
      date: "Jul 6, 2021",
    },
    {
      flow: "-",
      detail: "Sent to Bank Account (ADEBAYO MUSILIU JAGUN)",
      amount: "-$2,942.55",
      date: "Jul 2, 2021",
    },
    {
      flow: "-",
      detail: "Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)",
      amount: "-$500.12",
      date: "Jun 27, 2021",
    },
    {
      flow: "+",
      detail: "Received from Bank Account (TITUS CLEOPATRA MEDINA)",
      amount: "+$1,840.69",
      date: "Jun 19, 2021",
    },
    {
      flow: "+",
      detail: "Received from Rise Plan (SAVE FOR SCHOOL)",
      amount: "+$528.04",
      date: "Jun 19, 2021",
    },
  ];
  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.heading}
          source={IMAGES.BgStartABusiness}
        >
          <View style={styles.headingR}>
            <View style={styles.headingC1}>
              <TouchableOpacity style={styles.image}>
                <Ionicons
                  name="arrow-back-sharp"
                  size={24}
                  color={COLORS.Light.background}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headingC2}>
              <Text style={styles.headingC2t1}>Start a business</Text>
              <Text style={styles.headingC2t2}>for Kate Ventures</Text>
            </View>
            <View style={styles.headingC3}>
              <TouchableOpacity style={styles.image}>
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color={COLORS.Light.background}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.top}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scroll}
          >
            <View style={styles.topContent}>
              <View style={styles.r1}>
                <Text style={styles.r1t1}>Plan Balance</Text>
                <Text style={styles.r1t2}>$0.00</Text>
                <View style={styles.r1t3}>
                  <Text style={styles.r1t3a}>~ ₦0.00</Text>
                  <Text style={styles.r1t3b}>
                    <AntDesign name="questioncircle" size={12} color="black" />
                  </Text>
                </View>
                <Text style={styles.r1t4}>Gains</Text>
                <Text style={styles.r1t5}>+$5,000.43 • +12.4%</Text>
              </View>
              <View style={styles.r2}>
                <Text style={styles.r2t1}>0.01 achieved</Text>
                <Text style={styles.r2t1}>Target: $20,053.90</Text>
              </View>
              <View style={styles.r3}>
                <View style={styles.r3a}></View>
              </View>
              <View style={styles.r4}>
                <View style={styles.r4a}>
                  {/* <View> */}
                  <Text style={styles.r4t1}>Results are updated monthly</Text>
                  {/* </View> */}
                </View>
              </View>
              <TouchableOpacity style={styles.r5}>
                <Text style={styles.r5t1}>+</Text>
                <Text style={styles.r5t2}>Fund plan</Text>
              </TouchableOpacity>
              <View style={styles.r6}>
                <View style={styles.subHeader}>
                  <Text style={styles.subHeaderR1}>Performance</Text>
                  <Text style={styles.subHeaderR2}>$208.39</Text>
                  <Text style={styles.subHeaderR3}>July 26th, 2021</Text>
                  <View style={styles.subHeaderR4}>
                    <View style={styles.subHeaderC}>
                      <View style={styles.subHeaderD1}></View>
                      <Text style={styles.subHeaderC1}>
                        Investments • $50,400
                      </Text>
                    </View>
                    <View style={styles.subHeaderC}>
                      <View style={styles.subHeaderD2}></View>
                      <Text style={styles.subHeaderC1}>Returns • $20,803</Text>
                    </View>
                  </View>
                </View>
                <LineChart
                  data={{
                    labels: ["1M", "3M", "6M", "All"],
                    datasets: [
                      {
                        data: [19800, 86703, 12803, 35803, 19000],
                        color: () => COLORS.Light.colorSeventeen,
                        strokeWidth: 2,
                      },
                    ],
                  }}
                  width={Dimensions.get("window").width}
                  height={230}
                  yAxisLabel={"$"}
                  chartConfig={{
                    // backgroundColor: "#1cc910",
                    backgroundGradientFrom: COLORS.Light.colorOne,
                    backgroundGradientTo: COLORS.Light.colorOne,
                    decimalPlaces: 0,
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => COLORS.Light.background,
                    style: {
                      // borderRadius: 16,
                    },
                    propsForDots: {
                      // r: "6",
                      // strokeWidth: "2",
                      stroke: COLORS.Light.background,
                    },
                  }}
                  bezier
                  style={styles.chart}
                  withVerticalLines={false}
                  withOuterLines={false}
                />
              </View>
              <View style={styles.r7}>
                {infoList?.map((info, idx) => (
                  <View key={idx} style={styles.r7a}>
                    <Text style={styles.r7at1}>{info.title}</Text>
                    <Text style={styles.r7at2}>{info.value}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.r8}>
                <Text style={styles.r8a}>{"Recent transactions"}</Text>
                <TouchableOpacity style={styles.r8b}>
                  <Text style={styles.r8bt1}>{"View all"}</Text>
                  <AntDesign
                    name="right"
                    size={14}
                    color={COLORS.Light.colorOne}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.r9}>
                {transactions?.map((t, idx) => (
                  <View key={idx} style={styles.r9s}>
                    <View style={styles.r9i}>
                      <TouchableOpacity
                        style={[
                          styles.r9a,
                          {
                            backgroundColor: `${
                              "+" === t.flow
                                ? COLORS.Light.colorNineteen
                                : COLORS.Light.colorTwenty
                            }`,
                          },
                        ]}
                      >
                        <Feather
                          name={
                            "+" === t.flow
                              ? "arrow-down-left"
                              : "arrow-up-right"
                          }
                          size={24}
                          color={
                            "+" === t.flow
                              ? COLORS.Light.colorFifteen
                              : COLORS.Light.colorFourteen
                          }
                        />
                      </TouchableOpacity>

                      <View style={styles.r9b}>
                        <Text style={styles.r9bt1}>{t.detail}</Text>
                        <Text style={styles.r9bt2}>{t.date}</Text>
                      </View>
                    </View>
                    <Text style={styles.r9ii}>{t.amount}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.r10}></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PlanDetails;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.background,
    flex: 1,
  },
  container: {
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.Light.background,
  },
  heading: {
    // borderWidth: 1,
    width: "100%",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    backgroundColor: COLORS.Light.background,
  },
  topContent: {
    flex: 1,
    // borderWidth: 1,
    marginTop: 20,
    backgroundColor: COLORS.Light.background,
    minWidth: "100%",
    maxWidth: "100%",
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
  image: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorEighteen,
    alignItems: "center",
    justifyContent: "center",
  },
  headingR: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    backgroundColor: "transparent",
    // marginHorizontal: 25,
  },
  headingC1: {
    backgroundColor: "transparent",
  },
  headingC2: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  headingC3: {
    backgroundColor: "transparent",
  },
  headingC2t1: {
    color: COLORS.Light.background,
    fontWeight: "700",
    fontSize: SIZES.sizeNine,
  },
  headingC2t2: {
    color: COLORS.Light.background,
    fontWeight: "500",
    fontSize: SIZES.sizeSeven,
  },
  r1: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  r1t1: {
    fontSize: SIZES.sizeSix,
    color: COLORS.Light.colorTwentyFour,
    marginBottom: 2,
  },
  r1t2: {
    fontSize: SIZES.sizeTen,
    color: COLORS.Light.colorTwentyFive,
    marginBottom: 2,
    fontWeight: "700",
  },
  r1t3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  r1t3a: {
    fontSize: SIZES.sizeSix,
    color: COLORS.Light.colorTwentyFour,
    marginRight: 6,
  },
  r1t3b: {
    textAlign: "center",
  },

  r1t4: {
    marginBottom: 5,
  },
  r1t5: {
    color: COLORS.Light.colorFifteen,
    fontSize: SIZES.sizeSix,
  },
  r2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  r2t1: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix,
  },
  r3: {
    // width: 100,
    backgroundColor: COLORS.Light.colorSeven,
    height: 10,
    borderRadius: 10,
    // borderWidth: 1,
    marginBottom: 20,
  },
  r3a: {
    width: "10%",
    backgroundColor: COLORS.Light.colorOne,
    height: 10,
    borderRadius: 10,
  },
  r4: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
  r4a: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: COLORS.Light.colorSeven,
  },
  r4t1: {
    color: COLORS.Light.colorTwentyFour,
    textDecorationColor: COLORS.Light.colorSeven,
  },
  r5: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.Light.colorSeven,
    // borderWidth: 1,
    // borderColor: COLORS.Light.colorSix,
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  r5t1: {
    fontSize: SIZES.sizeTen,
    fontWeight: "300",
    color: COLORS.Light.colorOne,
    textAlign: "center",
    marginRight: 10,
  },
  r5t2: {
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
    color: COLORS.Light.colorOne,
    textAlign: "center",
    marginTop: 3,
  },
  r6: {
    // height: 550,
    // borderWidth: 1,
    backgroundColor: COLORS.Light.colorOne,
    borderRadius: 15,
    marginVertical: 25,
    padding: 10,
  },
  subHeader: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Light.colorOne,
    borderRadius: 15,
  },
  subHeaderR1: {
    fontSize: SIZES.sizeSixB,
    color: COLORS.Light.background,
    marginBottom: 5,
    backgroundColor: COLORS.Light.colorOne,
    marginTop: 20,
  },
  subHeaderR2: {
    fontSize: SIZES.sizeTen,
    color: COLORS.Light.background,
    marginBottom: 6,
    fontWeight: "700",
    backgroundColor: COLORS.Light.colorOne,
  },
  subHeaderR3: {
    fontSize: SIZES.sizeSeven,
    color: COLORS.Light.background,
    marginBottom: 20,
    backgroundColor: COLORS.Light.colorOne,
  },
  subHeaderR4: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: COLORS.Light.colorOne,
    paddingHorizontal: 12,
  },
  subHeaderC: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.Light.colorOne,
  },
  subHeaderC1: {
    justifyContent: "space-between",
    fontSize: SIZES.sizeFive,
    color: COLORS.Light.background,
  },
  subHeaderD1: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.Light.background,
    borderRadius: 10,
    marginRight: 5,
  },
  subHeaderD2: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.Light.colorSeventeen,
    borderRadius: 10,
    marginRight: 5,
  },
  chart: {
    marginTop: 35,
    // height: 250,
    // borderWidth: 1,
    // width: "100%",
    marginBottom: 20,
  },
  r7: {
    // borderWidth: 1,
    marginVertical: 10,
  },
  r7a: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
    borderBottomWidth: 1,
    marginVertical: 5,
    borderBottomColor: COLORS.Light.colorSeven,
  },
  r7at1: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSixB,
  },
  r7at2: {
    fontSize: SIZES.sizeSixB,
    fontWeight: "400",
  },
  r8: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
  r8a: {
    fontSize: SIZES.sizeEight,
    fontWeight: "300",
  },
  r8b: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  r8bt1: {
    fontSize: SIZES.sizeSixB,
    fontWeight: "500",
    color: COLORS.Light.colorOne,
    marginRight: 5,
  },
  r9: {
    marginVertical: 15,
    // borderWidth: 1,
    // width: "100%",
    // flex: 1,
  },
  r9s: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  r9i: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    flex: 1,
  },
  r9a: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    // borderWidth: 1,
  },
  r9b: {
    flex: 1,
    paddingRight: 10,
    // borderWidth: 1,
  },
  r9bt1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven - 1,
    fontWeight: "300",
  },
  r9bt2: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix - 1,
  },
  r9ii: {
    // borderWidth: 1,
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven - 1,
  },
  r10: {
    height: 150,
  },
});
