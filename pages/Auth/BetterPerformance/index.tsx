import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { MainButton } from "../../../components";

type NavigationProps = AuthProps<AuthRoutes.BetterPerformance>;

const BP: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* <View style={styles.top}> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.top}
          style={styles.scroll}
        >
          <TouchableOpacity>
            <Image
              source={IMAGES.BetterPerformanceIcon}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.slider}>
            {[1, 2, 3].map((_, idx) => (
              <View key={idx} style={styles.slide}>
                <Octicons
                  name="dot-fill"
                  size={13}
                  color={
                    idx + 1 === 3
                      ? COLORS.Light.colorThirteen
                      : COLORS.Light.colorTwentySix
                  }
                />
              </View>
            ))}
          </View>
          <View style={styles.content}>
            <Text style={styles.txt1}>Better Performance</Text>
            <Text style={styles.txt2}>
              You earn more returns, achieve more of your financial goals and
              protect your money from devaluation.
            </Text>
          </View>
          <View style={styles.swipes}>
            <View style={styles.btn1Container}>
              <MainButton
                title={"Sign Up"}
                onPressFunction={() => {
                  navigation?.navigate(AuthRoutes.SignUp);
                }}
                err={false}
                btnStyle={styles.btn1}
                textStyle={styles.btn1text}
              />
            </View>
            <View style={styles.btn2Container}>
              <MainButton
                title={"Sign In"}
                onPressFunction={() => {
                  navigation?.navigate(AuthRoutes.SignIn);
                }}
                err={false}
                btnStyle={styles.btn2}
                textStyle={styles.btn2text}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
    // </View>
  );
};

export default BP;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.colorTwelve,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    backgroundColor: COLORS.Light.colorTwelve,
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    width: "100%",
    marginTop: "20%",
    alignItems: "center",
    backgroundColor: COLORS.Light.colorTwelve,
  },
  content: {
    // borderWidth: 1,
    marginVertical: Platform.OS === "android" ? 10 : 40,
    width: "100%",
    backgroundColor: COLORS.Light.colorTwelve,
  },
  txt1: {
    color: COLORS.Light.colorThirteen,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
    marginTop: 5,
  },
  txt2: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeFiveC,
    fontWeight: "400",
    marginTop: 10,
  },
  txt3: {
    color: COLORS.Light.colorThirteen,
    fontWeight: "700",
  },
  image: {
    // borderWidth: 1,
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 25,
    color: COLORS.Light.background,
    marginTop: 45,
  },
  slider: {
    // borderWidth: 1,
    width: 50,
    height: 25,
    backgroundColor: COLORS.Light.colorTwelve,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slide: {
    backgroundColor: COLORS.Light.colorTwelve,
  },
  swipes: {
    width: "100%",
    marginTop: Platform.OS === "android" ? 0 : 25,
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
