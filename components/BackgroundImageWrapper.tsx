import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMAGES } from "../constants/Colors";

export default function BackgroundImageWrapper({
  children,
  navigation,
  route,
  sideIcon,
  imageSource,
  navigationScreen,
}: any): JSX.Element {
  const onPressHandler = () => {
    console.log("Home Lock pressed via Background Image");

    Alert.alert("Caution", "Are you sure you want to leave this screen?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed in BackgroundImage"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => navigation.navigate(navigationScreen) },
    ]);
  };
  return (
    <ImageBackground
      source={IMAGES.rtImageTwelveB}
      style={{
        width: "100%",
        flex: 1,
        backgroundColor: "#F5F5F7",
      }}
      imageStyle={{ opacity: 0.3, marginTop: "1%" }}
      resizeMode="stretch"
    >
      {sideIcon && (
        <TouchableOpacity style={styles.sideLock} onPress={onPressHandler}>
          <Image
            source={imageSource}
            style={{
              width: 70,
              height: 70,
              marginLeft: 40,
              marginTop: 10,
              borderColor: COLORS.Light.colorNineteen,
              borderWidth: 2,
              borderTopLeftRadius: 75,
              borderBottomLeftRadius: 180,
              borderBottomRightRadius: 180,
              borderTopRightRadius: 0,
            }}
          />
        </TouchableOpacity>
      )}
      <SafeAreaView style={{ ...styles.container }}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "-15%",
    // height: "300%",
  },
  sideLock: {
    // borderColor: COLORS.Light.colorNineteen,
    // borderTopLeftRadius: 75,
    // borderBottomLeftRadius: 180,
    // borderBottomRightRadius: 180,
    // borderTopRightRadius: 0,
    // borderWidth: 2,
    // top: 0,
    // left: 0,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    zIndex: 50,
  },
});
