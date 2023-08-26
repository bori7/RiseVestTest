import { StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import {
  FundWalletProps,
  FundWalletRoutes,
} from "../../../shared/const/routerFundWallet";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";

type NavigationProps = FundWalletProps<FundWalletRoutes.SelectBank>;

const SelectBank: React.FC<NavigationProps> = () => {
  const banks = [
    {
      msisdn: "0123456789 • ",
      bank: "GTBank PLC",
      name: "Bosun Olanrewaju",
    },
    {
      msisdn: "6145785229 • ",
      bank: "Fidelity Bank",
      name: "Bosun Olanrewaju",
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.image}>
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color={COLORS.Light.colorOne}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Select bank</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.banks}>
              {banks?.map((b, idx) => (
                <View key={idx} style={styles.bank}>
                  <View style={styles.banka}>
                    <Text style={styles.bankt1}>
                      {b.msisdn}
                      <Text style={styles.bankt3}>{b.bank}</Text>
                    </Text>
                    <Text style={styles.bankt2}>{b.name}</Text>
                  </View>
                  <View style={styles.bankb}>
                    <AntDesign
                      name="right"
                      size={24}
                      color={COLORS.Light.colorTwentyFour}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectBank;

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
    marginTop: "18%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "18%",
  },
  header: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    textAlign: "center",
    // borderWidth: 1,
    fontSize: SIZES.sizeNine,
    fontWeight: "700",
    // marginLeft: "10%",
  },
  body: {
    // borderWidth: 1,
    // height: 350,
  },
  banks: {
    // borderWidth: 1,
    paddingTop: 20,
  },
  bank: {
    // borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Light.colorSeven,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  banka: {},
  bankb: {
    justifyContent: "center",
  },
  bankt1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven,
    fontWeight: "400",
    marginBottom: 8,
  },
  bankt2: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven,
    fontWeight: "400",
    marginBottom: 8,
  },
  bankt3: {
    color: COLORS.Light.colorTwentyFour,
    fontWeight: "300",
  },
});
