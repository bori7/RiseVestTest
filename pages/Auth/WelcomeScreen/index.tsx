import { Image, StatusBar, StyleSheet } from "react-native";

import React, { useEffect } from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import RiseLogoSVG from "../../../shared/assets/images/svg/riselogo.svg";

type NavigationProps = AuthProps<AuthRoutes.Welcome>;

const WS: React.FC<NavigationProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation?.navigate(AuthRoutes.QualityAssets);
    }, 3500);
  }, [navigation]);
  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <RiseLogoSVG fill={COLORS.Light.background} />
          <Text style={styles.txt1}>
            {"Dollar investments that help you grow"}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.txt2}>{"All rights reserved "}</Text>
          <Text style={styles.txt2}>{"(c)2021"}</Text>
        </View>
        <Image
          source={IMAGES.Bubbles}
          style={styles.gif}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default WS;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.colorOne,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    backgroundColor: COLORS.Light.colorOne,
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    width: "100%",
    marginTop: "33%",
    alignItems: "center",
    backgroundColor: COLORS.Light.colorOne,
  },
  bottom: {
    // borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "12%",
    backgroundColor: COLORS.Light.colorOne,
  },
  txt1: {
    color: COLORS.Light.background,
    fontSize: SIZES.sizeSeven,
    flexWrap: "wrap",
    fontWeight: "400",
    width: "60%",
    textAlign: "center",
    marginTop: 25,
  },
  txt2: {
    color: COLORS.Light.background,
    fontSize: SIZES.sizeFive,
    fontWeight: "400",
    flexWrap: "wrap",
    // borderWidth: 1,
  },
  image: {
    borderWidth: 1,
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 35,
    color: COLORS.Light.background,
  },
  gif: {
    position: "absolute",
  },
});
