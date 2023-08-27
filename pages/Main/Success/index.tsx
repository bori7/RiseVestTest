import { Image, StyleSheet } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { MainProps, MainRoutes } from "../../../shared/const/routerMain";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { MainButton } from "../../../components";
// import { CompositeScreenProps } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";
import { CompositeScreenProps } from "@react-navigation/native";

type NavigationProps = CompositeScreenProps<
  MainProps<MainRoutes.Success>,
  | RootScreenProps<RootRoutes.Main>
  | RootScreenProps<RootRoutes.CreatePlan>
  | RootScreenProps<RootRoutes.FundWallet>
  | RootScreenProps<RootRoutes.Auth>
>;

// type NavigationProps = CompositeScreenProps<
//   AuthProps<AuthRoutes.TellUsMore>,
//   RootScreenProps<RootRoutes.Main>
// >;

const Success: React.FC<NavigationProps> = ({ navigation, route }) => {
  const params = route.params;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topContent}>
            <Image source={IMAGES.SuccessTick} style={styles.image} />
            <Text style={styles.txt1}>{params?.mainText || "Sucesss"}</Text>
            <Text style={styles.txt2}>
              {params?.subText || "Click the button below to proceed"}
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.btn1Container}>
            <MainButton
              title={params?.btnText || "Okay"}
              onPressFunction={() => {
                !params?.toSubScreen
                  ? navigation.replace(params?.toScreen || MainRoutes.Homepage)
                  : navigation.replace(
                      params?.toScreen || MainRoutes.Homepage,
                      {
                        screen: params?.toSubScreen || MainRoutes.Homepage,
                      }
                    );
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

export default Success;

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
    marginTop: "55%",
    alignItems: "center",
    // justifyContent: "center",
  },
  topContent: {
    width: "60%",
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
  txt1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
    flexWrap: "wrap",
    textAlign: "center",
    marginBottom: 8,
  },
  txt2: {
    color: COLORS.Light.colorTwentyFour,
    flexWrap: "wrap",
    textAlign: "center",
    fontSize: SIZES.sizeSix,
    fontWeight: "400",
  },
  image: {
    // borderWidth: 1,
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 35,
  },
});
