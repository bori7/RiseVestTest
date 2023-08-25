import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import RiseLogoSVG from "../../../shared/assets/images/svg/riselogo.svg";
import BellButton from "../../../shared/assets/images/svg/bell.svg";
import { Badge } from "../../../components";
import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { MainProps, MainRoutes } from "../../../shared/const/routerMain";

type NavigationProps = MainProps<MainRoutes.Homepage>;

const HomePage: React.FC<NavigationProps> = () => {
  const planList = [1, 2];
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground style={styles.container} source={IMAGES.HomeBg}>
        <View style={styles.top}>
          <View style={styles.r1}>
            <View style={styles.r1c1}>
              <Text style={styles.r1t1}>Good morning ☀</Text>
              <Text style={styles.r1t2}>Deborah</Text>
            </View>
            <View style={styles.r1c2}>
              <View style={styles.r1c2v1}>
                <Text style={styles.r1t3}>Earn 3% bonus</Text>
              </View>
              <View style={styles.r1c2v2}>
                <BellButton
                  fill={COLORS.Light.colorOne}
                  height={30}
                  width={30}
                />
                <Badge
                  badgeSize={28}
                  corner={8}
                  text={"9+"}
                  textSize={14}
                  bgColor={COLORS.Light.colorFourteen}
                  textColor={COLORS.Light.background}
                />
              </View>
            </View>
          </View>
          <ImageBackground style={styles.r2}>
            <View style={styles.r2r1}>
              <Text style={styles.r2t1}>Total Balance</Text>
              <Ionicons
                name="ios-eye-off"
                size={14}
                color={COLORS.Light.colorOne}
              />
            </View>
            <View style={styles.r2r2}>
              <Text style={styles.r2t2}>$0.00</Text>
            </View>
            <View style={styles.r2r3}>
              <Text style={styles.r2t3}>Total Gains </Text>
              <Feather
                name="arrow-up-right"
                size={16}
                color={COLORS.Light.colorFifteen}
              />
              <Text style={styles.r2t4}>0.00%</Text>
              <AntDesign
                name="right"
                size={14}
                color={COLORS.Light.colorTwentyFive}
              />
            </View>

            <View style={styles.r2r4}>
              {[1, 2, 3].map((_, idx) => (
                <View key={idx} style={styles.slide}>
                  <Octicons
                    name={idx + 1 === 1 ? "dash" : "dot-fill"}
                    size={idx + 1 === 1 ? 25 : 13}
                    color={
                      idx + 1 === 1
                        ? COLORS.Light.colorOne
                        : COLORS.Light.colorTwentySix
                    }
                  />
                </View>
              ))}
            </View>
          </ImageBackground>
          <View style={styles.r3}>
            <Text style={styles.r3t1}>+</Text>
            <Text style={styles.r3t2}>Add money</Text>
          </View>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scroll}
          >
            <View style={styles.sr1}>
              <Text style={styles.sr1t1}>
                {!planList?.length ? "Create a plan" : "Your plans"}
              </Text>
              <Text
                style={[
                  styles.sr1t2,
                  {
                    color: !planList?.length
                      ? COLORS.Light.colorSix
                      : COLORS.Light.colorOne,
                  },
                ]}
              >
                View all plans{" "}
                <AntDesign
                  name="right"
                  size={15}
                  color={
                    !planList?.length
                      ? COLORS.Light.colorSix
                      : COLORS.Light.colorOne
                  }
                />
              </Text>
            </View>
            <View style={styles.sr2}>
              <Text style={styles.sr2t1}>
                Start your investment journey by creating a plan
              </Text>
            </View>
            <View style={styles.sr3}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.planStyle}
                contentContainerStyle={styles.plansContentStyle}
              >
                <View style={styles.plan}>
                  <View style={styles.planAddIcon}>
                    <Text style={styles.planAddBtn}>+</Text>
                  </View>
                  <Text style={styles.planAddText}>
                    Create an investment plan
                  </Text>
                </View>
                {planList?.map((_, index) => (
                  <ImageBackground
                    key={`#${index}`}
                    style={styles.planItem}
                    source={IMAGES.BuildWealth}
                  >
                    <Text style={styles.planText}>Build Wealth</Text>
                    <Text style={styles.planText}>$188.25</Text>
                    <Text style={styles.planText}>Mixed assets</Text>
                  </ImageBackground>
                ))}
              </ScrollView>
            </View>
            <View style={styles.sr4}></View>
            <View style={styles.sr5}></View>
            <View style={styles.bottomLogo}>
              <RiseLogoSVG fill={COLORS.Light.colorSeven} height={30} />
            </View>
          </ScrollView>
        </View>
        {/* <View style={styles.bottom}>
          <RiseLogoSVG fill={COLORS.Light.colorSeven} height={30} />
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    // flex: 1,
    // borderWidth: 1,
    width: "90%",
    marginTop: "15%",
    marginBottom: 5,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  scrollContainer: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: "transparent",
    width: "90%",
    alignItems: "center",
    // height: "100%",
  },
  scroll: {
    // borderWidth: 1,
    width: "100%",
    marginTop: 10,
    backgroundColor: "transparent",
  },
  scrollContent: {
    // borderWidth: 1,
    width: "100%",
    // height: "500%",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
    paddingVertical: 5,
  },
  sr1: {
    width: "100%",
    // borderWidth: 1,
    marginVertical: 5,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
  },
  sr1t1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSevenB,
    textAlign: "center",
    fontWeight: "400",
  },
  sr1t2: {
    color: COLORS.Light.colorSix,
    textAlign: "center",
    fontWeight: "600",
    fontSize: SIZES.sizeSix,
  },
  sr2: {
    width: "100%",
    // borderWidth: 1,
    marginVertical: 15,
    backgroundColor: "transparent",
  },
  sr2t1: {
    color: COLORS.Light.colorSix,
    fontSize: SIZES.sizeSixB,
  },
  sr3: {
    width: "100%",
    // borderWidth: 1,
    marginVertical: 5,
    backgroundColor: "transparent",
  },
  planStyle: {
    paddingVertical: 10,
    backgroundColor: "transparent",
    width: "100%",
    // borderWidth: 1,
  },
  plansContentStyle: {
    // justifyContent: "center",
    backgroundColor: "transparent",
    // borderWidth: 1,
    // alignItems: "center",
  },
  plan: {
    height: 270,
    // borderWidth: 1,
    width: 210,
    marginRight: 25,
    borderRadius: 15,
    backgroundColor: COLORS.Light.colorSeven,
    justifyContent: "center",
    alignItems: "center",
  },
  planItem: {
    height: 270,
    // borderWidth: 1,
    width: 210,
    marginRight: 25,
    borderRadius: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 20,
  },
  planText: {
    color: COLORS.Light.background,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
  },
  planAddIcon: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.Light.colorSixTeen,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  planAddBtn: {
    color: COLORS.Light.colorOne,
    fontSize: SIZES.sizeEleven,
    fontWeight: "300",
  },
  planAddText: {
    color: COLORS.Light.colorTwentyFive,
    fontWeight: "600",
    width: "60%",
    textAlign: "center",
    marginVertical: 10,
  },
  sr4: {
    width: "100%",
    borderWidth: 1,
    marginVertical: 5,
    height: 50,
  },
  sr5: {
    width: "100%",
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: "transparent",
    height: 50,
  },
  bottom: {
    // borderWidth: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "10%",
    backgroundColor: "transparent",
  },
  bottomLogo: {
    // borderWidth: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "10%",
    backgroundColor: "transparent",
    marginTop: 50,
  },
  r1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  r1c1: {
    // borderWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  r1t1: {
    fontSize: SIZES.sizeSeven,
    letterSpacing: 1,
  },
  r1t2: {
    fontSize: SIZES.sizeNine,
    fontWeight: "400",
    marginVertical: 5,
  },
  r1c2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  r1c2v1: {
    backgroundColor: COLORS.Light.colorOne,
    padding: 6,
    borderRadius: 15,
  },
  r1c2v2: {
    marginHorizontal: 10,
    backgroundColor: "transparent",
  },
  r1t3: {
    color: COLORS.Light.background,
    marginHorizontal: 8,
  },
  r2: {
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: COLORS.Light.background,
  },
  r2r1: {
    // borderWidth: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  r2r2: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    borderBottomColor: COLORS.Light.colorSeven,
    borderBottomWidth: 1,
    width: "80%",
    alignItems: "center",
  },
  r2r3: {
    backgroundColor: "transparent",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  r2r4: {
    backgroundColor: "transparent",
    marginVertical: 5,
    width: 40,
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  r2t1: {
    fontSize: SIZES.sizeSeven,
    marginRight: 10,
    color: COLORS.Light.colorSix,
  },
  r2t2: {
    fontSize: SIZES.sizeTen,
    fontWeight: "400",
    marginVertical: 3,
  },
  r2t3: {
    fontSize: SIZES.sizeSeven,
    fontWeight: "400",
    marginVertical: 3,
    color: COLORS.Light.colorSix,
  },
  r2t4: {
    fontSize: SIZES.sizeSeven,
    fontWeight: "400",
    marginVertical: 3,
    color: COLORS.Light.colorFifteen,
    marginRight: 4,
  },
  slide: {
    backgroundColor: COLORS.Light.colorEight,
  },
  r3: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.Light.colorSix,
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  r3t1: {
    fontSize: SIZES.sizeTen,
    fontWeight: "300",
    color: COLORS.Light.colorOne,
    textAlign: "center",
    marginRight: 10,
  },
  r3t2: {
    fontSize: SIZES.sizeSix,
    fontWeight: "600",
    color: COLORS.Light.colorOne,
    textAlign: "center",
    marginTop: 3,
  },
});
