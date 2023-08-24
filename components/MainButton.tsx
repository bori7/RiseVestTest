import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/Colors";
import { MainButtonContainer } from "../types";

const MainButton: React.FC<MainButtonContainer> = ({
  title,
  disabled = false,
  onPressFunction,
  err = false,
  btnStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[
        styles.button,
        {
          backgroundColor: err
            ? `${COLORS.Light.colorThree}`
            : `${COLORS.Light.colorOne}`,
        },
        // {
        //   backgroundColor: disabled
        //     ? `${COLORS.Light.colorThree}`
        //     : `${COLORS.Light.colorOne}`,
        // },
        btnStyle,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      disabled={disabled}
    >
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,

    // marginVertical: 10,
  },
  textStyle: {
    color: COLORS.Light.background,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  opacity: {
    opacity: 0.8,
  },
});

export default MainButton;
