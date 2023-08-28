import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React, { useEffect } from "react";
import { Text, View } from "../../../components/Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { MainButton } from "../../../components";
import { LineChart } from "react-native-chart-kit";
import { CommonActions, CompositeScreenProps } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";
import { MainRoutes } from "../../../shared/const/routerMain";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  computeEstimatedMonthlyInvestment,
  formatDatePlaDetails,
} from "../../../shared/helper";
import {
  GetPlanProjectionResponseType,
  GetRatesResponseType,
} from "../../../shared/types/queries";
import { getRates } from "../../../services/General";
import { useQuery } from "react-query";
import { getPlanProjections } from "../../../services/Plans";
import { CreatePlanRequestType } from "../../../shared/types/slices";
import { createPlan } from "../../../store/slices/plan";

type NavigationProps = CompositeScreenProps<
  CreatePlanProps<CreatePlanRoutes.Review>,
  RootScreenProps<RootRoutes.Main>
>;

const Review: React.FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();

  const planState = useSelector((state: RootState) => state.plan);
  const { planLoading, planData, planError } = planState;

  const userState = useSelector((state: RootState) => state.user);
  const { userLoading, userData, userError } = userState;

  const {
    data: rateData,
    isLoading: rateDataLoading,
    isError: rateDataError,
  } = useQuery<GetRatesResponseType>("getrate", () =>
    getRates(userData?.token)
  );

  const {
    data: projectionData,
    isLoading: projectionDataLoading,
    isError: projectionDataError,
  } = useQuery<GetPlanProjectionResponseType>("getprojection", () =>
    getPlanProjections(
      userData?.token,
      ["monthly_investment", "target_amount", "maturity_date"],
      [
        computeEstimatedMonthlyInvestment(
          planData?.target_amount,
          planData?.maturity_date
        ) || 0,
        planData?.target_amount || 50,
        new Date(
          new Date(planData?.maturity_date || new Date()).setFullYear(
            new Date().getFullYear() + 2
          )
        ).toISOString(),
      ]
    )
  );

  const resetAction = CommonActions.reset({
    index: 1,
    routes: [
      // { name: "Home" }, // Navigate to Home tab
      {
        name: RootRoutes.Main,
        params: {
          screen: MainRoutes.Success,
          params: {
            mainText: "You just created your plan.",
            subText: `Well done, ${userData?.first_name}`,
            btnText: "View plan",
            toScreen: RootRoutes.CreatePlan,
            toSubScreen: CreatePlanRoutes.PlanDetails,
            toSubScreenParams: { planId: planData?.id },
          },
        },
      },
    ],
  });

  const resetActionStartOver = CommonActions.reset({
    index: 0,
    routes: [
      {
        name: CreatePlanRoutes.Intro,
      },
    ],
  });

  const agreeContinue = () => {
    const request: CreatePlanRequestType = {
      plan_name: planData?.plan_name || "",
      target_amount: planData?.target_amount || "",
      maturity_date: planData?.maturity_date || "",
      token: userData?.token,
    };
    dispatch(createPlan(request));

    if (!planLoading && planError == null && planData?.user_id) {
      navigation.dispatch(resetAction);
    }
  };

  useEffect(() => {
    if (!planLoading && planError == null && planData?.user_id) {
      navigation.dispatch(resetAction);
    }
  }, [planData]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                navigation.navigate(CreatePlanRoutes.TargetDate);
              }}
            >
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color={COLORS.Light.colorOne}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Review</Text>
          </View>

          <View style={styles.subHeader}>
            <Text style={styles.subHeaderR1}>{planData?.plan_name}</Text>
            <Text style={styles.subHeaderR2}>
              {`$${Math.floor(
                parseFloat(planData?.target_amount || "0.00") /
                  parseFloat(rateData?.buy_rate || "100.00")
              ).toFixed(2)}` || "0.00"}
            </Text>
            <Text style={styles.subHeaderR3}>
              {formatDatePlaDetails(planData?.maturity_date)}
            </Text>
            <View style={styles.subHeaderR4}>
              <View style={styles.subHeaderC}>
                <View style={styles.subHeaderD1}></View>
                <Text
                  style={styles.subHeaderC1}
                >{`Investments • $${projectionData?.total_invested} || "0.00"`}</Text>
              </View>
              <View style={styles.subHeaderC}>
                <View style={styles.subHeaderD2}></View>
                <Text style={styles.subHeaderC1}>{`Returns • $${
                  projectionData?.total_returns || "0.00"
                }`}</Text>
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
        <LineChart
          data={{
            labels: [
              new Date().getFullYear().toString(),
              new Date(planData?.maturity_date || new Date().toISOString())
                .getFullYear()
                .toString(),
            ],
            datasets: [
              {
                data: [0, parseFloat(planData?.target_amount || "0.00")],
                color: () => COLORS.Light.colorSix,
              },
              {
                data: [0, parseFloat(planData?.total_returns || "0.00")],
                color: () => COLORS.Light.colorOne,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={230}
          yAxisLabel={"$"}
          chartConfig={{
            // backgroundColor: "#1cc910",
            backgroundGradientFrom: COLORS.Light.background,
            backgroundGradientTo: COLORS.Light.background,
            decimalPlaces: 0,
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => COLORS.Light.colorTwentyFour,
            style: {
              // borderRadius: 16,
            },
            propsForDots: {
              // r: "6",
              // strokeWidth: "2",
              // stroke: "#ffa726",
            },
          }}
          bezier
          style={styles.chart}
          withVerticalLines={false}
          withOuterLines={false}
        />

        <View style={styles.containerB}>
          <View style={styles.bR1}>
            <Text style={styles.bR1t1}>Estimated monthly investment</Text>
            <Text style={styles.bR1t2}>{`$${
              computeEstimatedMonthlyInvestment(
                planData?.target_amount,
                planData?.maturity_date
              ) || 0
            }`}</Text>
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
                  agreeContinue();
                }}
                err={false}
                btnStyle={styles.btn1}
                textStyle={styles.btn1text}
                disabled={planLoading}
                loading={planLoading}
              />
            </View>
            <View style={styles.btn2Container}>
              <MainButton
                title={"Start over"}
                onPressFunction={() => {
                  navigation.dispatch(resetActionStartOver);
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
    marginLeft: 5,
  },
  chart: {
    marginTop: 35,
    // height: 250,
    // borderWidth: 1,
    // width: "100%",
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
