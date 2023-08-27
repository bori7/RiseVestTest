import { Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";

type NavigationProps = AuthProps<AuthRoutes.SuperiorSelection>;

const SS: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Image
              source={IMAGES.SuperiorSelection}
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
                    idx + 1 === 2
                      ? COLORS.Light.colorEleven
                      : COLORS.Light.colorTwentySix
                  }
                />
              </View>
            ))}
          </View>
          <View style={styles.content}>
            <Text style={styles.txt1}>Superior Selection</Text>
            <Text style={styles.txt2}>
              Our expert team and intelligent algorithms select assets that beat
              the markets.
            </Text>
          </View>
          <View style={styles.swipes}>
            <TouchableOpacity
              style={styles.swipe1}
              onPress={() => {
                navigation?.navigate(AuthRoutes.QualityAssets);
              }}
            >
              <AntDesign
                name="arrowleft"
                size={15}
                color={COLORS.Light.colorEleven}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.swipe2}
              onPress={() => {
                navigation?.navigate(AuthRoutes.BetterPerformance);
              }}
            >
              <Text style={styles.txt3}>Next</Text>
              <AntDesign
                name="arrowright"
                size={15}
                color={COLORS.Light.colorEleven}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SS;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.colorTen,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    backgroundColor: COLORS.Light.colorTen,
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    width: "100%",
    marginTop: "20%",
    alignItems: "center",
    backgroundColor: COLORS.Light.colorTen,
  },
  content: {
    // borderWidth: 1,
    marginVertical: 40,
    width: "100%",
    backgroundColor: COLORS.Light.colorTen,
  },
  txt1: {
    color: COLORS.Light.colorEleven,
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
    color: COLORS.Light.colorEleven,
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
    backgroundColor: COLORS.Light.colorTen,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slide: {
    backgroundColor: COLORS.Light.colorTen,
  },
  swipes: {
    width: "100%",
    marginTop: 25,
    height: 50,
    justifyContent: "space-between",
    backgroundColor: COLORS.Light.colorTen,
    flexDirection: "row",
  },
  swipe1: {
    borderRadius: 5,
    height: "100%",
    width: 40,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
  },
  swipe2: {
    borderRadius: 5,
    height: "100%",
    width: 90,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 18,
  },
});
