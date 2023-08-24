import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../constants/Colors";

export default function CustomInput({
  mobileNo,
  setMobileNo,
  label,
  style,
}: any) {
  return (
    <View>
      <TextInput
        style={style}
        mode="outlined"
        label={label}
        value={mobileNo}
        selectionColor={COLORS.Light.colorSixteen}
        outlineColor="#cdcdcd"
        activeOutlineColor={COLORS.Light.colorSixteen}
        onChangeText={(txt) => {
          setMobileNo(txt);
        }}
        maxLength={13}
      />
    </View>
  );
}
