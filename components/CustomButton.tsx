import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/Colors";

export default function CustomButton({ style, title, onPress, loading }: any) {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={loading}>
      <LinearGradient
        colors={[COLORS.Light.colorOne, COLORS.Light.colorThree]}
        start={{ x: 0.6, y: 0.5 }}
        style={styles.button}
        end={{ x: 1, y: 0.3 }}
      >
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.Light.colorFour} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    paddingVertical: 10,
  },
  whiteButton: {
    borderWidth: 2,
    borderColor: `${COLORS.Light.colorSixteen}`,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: COLORS.Light.colorFour,
  },
});
