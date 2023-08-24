import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS, IMAGES } from "../../constants/Colors";

function CustomToast({ toast }: any) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "95%",
        minHeight: 65,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        backgroundColor: COLORS.Light.colorThirteen,
        borderRadius: 5,
        borderColor: COLORS.Light.colorThree,
        borderWidth: 1,
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
          height: 3,
          width: 3,
        },
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: 3,
        }}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            borderColor: COLORS.Light.colorNineteen,
            borderWidth: 2,
            borderTopLeftRadius: 75,
            borderBottomLeftRadius: 180,
            borderBottomRightRadius: 180,
            borderTopRightRadius: 0,
          }}
          source={IMAGES.createPlan}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "300",
            fontSize: 15,
            marginLeft: 5,
          }}
        >
          ECO SELFIE AUTHENTICATOR
        </Text>
      </View>
      <View style={{ marginVertical: 3 }}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {toast.type === "success" ? "Success" : "Error"}
        </Text>
      </View>
      <Text style={toast.textStyle}>{toast.message}</Text>
    </View>
  );
}

export default CustomToast;
