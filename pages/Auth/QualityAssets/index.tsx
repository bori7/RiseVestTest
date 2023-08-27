import { Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { AuthProps, AuthRoutes } from "../../../shared/const/routerAuth";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";

type NavigationProps = AuthProps<AuthRoutes.QualityAssets>;

const QA: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Image
              source={IMAGES.Quality}
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
                    idx + 1 === 1
                      ? COLORS.Light.colorNine
                      : COLORS.Light.colorTwentySix
                  }
                />
              </View>
            ))}
          </View>
          <View style={styles.content}>
            <Text style={styles.txt1}>Quality assets</Text>
            <Text style={styles.txt2}>
              Rise invests your money into the best dollar investments around
              the world.
            </Text>
          </View>
          <View style={styles.swipes}>
            <TouchableOpacity style={styles.swipe1}>
              <AntDesign
                name="arrowleft"
                size={15}
                color={COLORS.Light.colorSix}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.swipe2}
              onPress={() => {
                navigation?.navigate(AuthRoutes.SuperiorSelection);
              }}
            >
              <Text style={styles.txt3}>Next</Text>
              <AntDesign
                name="arrowright"
                size={15}
                color={COLORS.Light.colorNine}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QA;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.Light.colorEight,
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    backgroundColor: COLORS.Light.colorEight,
  },
  top: {
    flex: 1,
    // borderWidth: 1,
    width: "100%",
    marginTop: "20%",
    alignItems: "center",
    backgroundColor: COLORS.Light.colorEight,
  },
  content: {
    // borderWidth: 1,
    marginVertical: 40,
    width: "100%",
    backgroundColor: COLORS.Light.colorEight,
  },
  txt1: {
    color: COLORS.Light.colorNine,
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
    color: COLORS.Light.colorNine,
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
    backgroundColor: COLORS.Light.colorEight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slide: {
    backgroundColor: COLORS.Light.colorEight,
  },
  swipes: {
    width: "100%",
    marginTop: 25,
    height: 50,
    justifyContent: "space-between",
    backgroundColor: COLORS.Light.colorEight,
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
