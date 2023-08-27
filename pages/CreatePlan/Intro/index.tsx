import { Image, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import {
  CreatePlanProps,
  CreatePlanRoutes,
} from "../../../shared/const/routerCreatePlan";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { MainButton } from "../../../components";
import { CommonActions, CompositeScreenProps } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";
import { MainRoutes } from "../../../shared/const/routerMain";

type NavigationProps = CompositeScreenProps<
  CreatePlanProps<CreatePlanRoutes.Intro>,
  RootScreenProps<RootRoutes.Main>
>;

const Intro: React.FC<NavigationProps> = ({ navigation }) => {
  const stepList = [
    {
      header: "Give us a few details",
      detail: "Tell us what you want to achieve and we will help you get there",
      icon: <Text style={styles.ht1}>?</Text>,
    },
    {
      header: "Turn on auto-invest",
      detail:
        "The easiest way to get your investment working for you is to fund to periodically. ",
      icon: (
        <Ionicons
          name="md-calendar-sharp"
          size={24}
          color={COLORS.Light.colorOne}
        />
      ),
    },
    {
      header: "Modify as you progress",
      detail:
        "You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more.",
      icon: <EvilIcons name="gear" size={24} color={COLORS.Light.colorOne} />,
    },
  ];
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

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                navigation.dispatch(resetAction);
              }}
            >
              <Feather name="x" size={24} color={COLORS.Light.colorOne} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create a plan</Text>
          </View>
          <Text style={styles.subHeader}>Reach your goals faster</Text>

          <TouchableOpacity>
            <Image
              source={IMAGES.CreatePlan}
              style={styles.centerImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.steps}>
            {stepList?.map((s, idx) => (
              <View key={idx} style={styles.step}>
                <TouchableOpacity style={styles.sr4a1}>
                  {s.icon}
                </TouchableOpacity>
                <View style={styles.detail}>
                  <Text style={styles.detailHeader}>{s.header}</Text>
                  <Text style={styles.detailText}>{s.detail}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.btn1Container}>
            <MainButton
              title={"Continue"}
              onPressFunction={() => {
                navigation.navigate(CreatePlanRoutes.GoalName);
              }}
              err={false}
              btnStyle={styles.btn1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Intro;

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
  subHeader: {
    // borderWidth: 1,
    // flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    textAlign: "center",
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSeven,
  },
  centerImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 25,
    color: COLORS.Light.background,
    marginTop: 40,
  },
  step: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  steps: {
    // borderWidth: 1,
    // width: "100%",
    // height: "30%",
  },
  sr4a1: {
    // borderWidth: 1,
    backgroundColor: COLORS.Light.colorSeven,
    marginRight: 15,
    // paddingHorizontal: 5,
    // paddingVertical: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  ht1: {
    color: COLORS.Light.colorOne,
    fontSize: SIZES.sizeNine,
    fontWeight: "300",
  },
  detail: {
    // borderWidth: 1,
    flex: 1,
  },
  detailHeader: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSixB,
    fontWeight: "600",
    marginBottom: 8,
  },
  detailText: {
    flexWrap: "wrap",
    color: COLORS.Light.colorTwentyFour,
  },
  bottom: {
    // borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "10%",
  },
  btn1Container: {
    marginVertical: 20,
    width: "100%",
  },
  btn1: {
    borderRadius: 5,
  },
});
