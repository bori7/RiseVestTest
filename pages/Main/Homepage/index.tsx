import { StatusBar, StyleSheet } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import { COLORS } from "../../../constants/Colors";

const HomePage = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>HomePage</Text>
      </View>
    </View>
  );
};

export default HomePage;

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
});
