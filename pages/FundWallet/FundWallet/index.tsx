import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useState } from "react";
import { Text, View } from "../../../components/Themed";
import {
  FundWalletProps,
  FundWalletRoutes,
} from "../../../shared/const/routerFundWallet";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { MainButton } from "../../../components";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootRoutes, RootScreenProps } from "../../../shared/const/routerRoot";
import { CreatePlanRoutes } from "../../../shared/const/routerCreatePlan";
import { GetRatesResponseType } from "../../../shared/types/queries";
import { getRates } from "../../../services/General";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useQuery } from "react-query";

type NavigationProps = CompositeScreenProps<
  FundWalletProps<FundWalletRoutes.FundWallet>,
  RootScreenProps<RootRoutes.CreatePlan>
>;

interface Iprops {
  icon: string;
  name: string;
  time?: string;
  rate?: string;
  fee?: string;
}

const FundWallet: React.FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();

  const userState = useSelector((state: RootState) => state.user);
  const { userLoading, userData, userError } = userState;

  const {
    data: rateData,
    isLoading: rateDataLoading,
    isError: rateDataError,
  } = useQuery<GetRatesResponseType>("getrate", () =>
    getRates(userData?.token)
  );

  const channels: Iprops[] = [
    {
      icon: "bank-transfer",
      name: "Naira Bank Transfer",
      time: "Timeline - 15 mins",
      rate: `Rate - $1 = ₦${rateData?.sell_rate || "0.00"}`,
      fee: "Fee - 1.5%",
    },
    {
      icon: "credit-card-outline",
      name: "Naira Debit card",
      time: "Timeline - 15 mins",
      rate: `Rate - $1 = ₦${rateData?.sell_rate || "0.00"}`,
      fee: "Fee - 1.5%",
    },
    {
      icon: "bank-outline",
      name: "Naira Direct Debit",
      time: "Timeline - 15 mins",
      rate: `Rate - $1 = ₦${rateData?.sell_rate || "0.00"}`,
      fee: "Fee - 1.5%",
    },
    {
      icon: "credit-card-plus-outline",
      name: "USD Debit/Credit Card",
      time: "Timeline - 1 business day",
      rate: `Rate - $1 = ₦${rateData?.sell_rate || "0.00"}`,
      fee: "Fee - 0.5%",
    },
    {
      icon: "bitcoin",
      name: "Crypto",
      time: "Timeline - 15 mins",
      rate: `Rate - $1 = ₦${rateData?.sell_rate || "0.00"}`,
      fee: "Fee - 0.1%",
    },
  ];

  const [visible, setVisible] = useState<boolean>(false);
  const [proceed, setProceed] = useState<boolean>(false);
  const statusBarConfig = visible
    ? {
        translucent: true,
        backgroundColor: "transparent",
        barStyle: "light-content",
      }
    : { barStyle: "dark-content", backgroundColor: COLORS.Light.colorOne };

  const closeModal = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.main}>
      {/* <StatusBar {...statusBarConfig} /> */}
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                // navigation.navigate(RootRoutes.CreatePlan, {
                //   screen: CreatePlanRoutes.PlanDetails,
                // });
                navigation.goBack();
              }}
            >
              <Feather name="x" size={24} color={COLORS.Light.colorOne} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Fund Wallet</Text>
          </View>
          <View style={styles.content}>
            {channels?.map((c, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.r}
                onPress={() => {
                  setVisible(true);
                }}
              >
                <TouchableOpacity style={styles.rc1}>
                  <MaterialCommunityIcons
                    name={`${c.icon}`}
                    size={26}
                    color={COLORS.Light.colorOne}
                  />
                </TouchableOpacity>
                <View style={styles.rc2}>
                  <Text style={styles.rc2t1}>{c.name}</Text>
                  <Text style={styles.rc2t2}>{c.time}</Text>
                </View>
                <View style={styles.rc3}>
                  <Text style={styles.rc3t1}>{c.rate}</Text>
                  <Text style={styles.rc3t2}>{c.fee}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.modalOverlay} />
              </TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity
                    style={styles.modalImage}
                    onPress={closeModal}
                  >
                    <Feather name="x" size={24} color={COLORS.Light.colorOne} />
                  </TouchableOpacity>
                  <Text style={styles.modalHeaderText}>
                    About Exchange Rates
                  </Text>
                </View>
                <View style={styles.mr2}>
                  <View style={styles.mr2a}>
                    <View style={styles.mr2ai}>
                      <Text style={styles.mr2ait1}>USD Buy Rate</Text>
                      <Text style={styles.mr2ait2}>
                        We buy US dollars at this rate
                      </Text>
                    </View>
                    <Text style={styles.mr2aii}>{`₦${
                      rateData?.buy_rate || "0.00"
                    }`}</Text>
                  </View>
                  <View style={styles.mr2a}>
                    <View style={styles.mr2ai}>
                      <Text style={styles.mr2ait1}>USD Sell Rate</Text>
                      <Text style={styles.mr2ait2}>
                        The current value of your investments in Naira
                      </Text>
                    </View>
                    <Text style={styles.mr2aii}>{`₦${
                      rateData?.sell_rate || "0.00"
                    }`}</Text>
                  </View>
                </View>
                <Text style={styles.mr3}>
                  These exhange rates are provided by independent third parties
                  who handle fund conversions at the prevailing parallel rates
                  and are not set, or controlled or by Rise. They are subject to
                  change based on market trends.
                </Text>

                <View style={styles.mr4}>
                  <MainButton
                    title={"Accept & Continue"}
                    onPressFunction={() => {
                      closeModal();
                      navigation.navigate(FundWalletRoutes.ChooseFromPlans);
                    }}
                    err={false}
                    btnStyle={styles.btn1}
                    // disabled={!proceed}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default FundWallet;

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
    marginLeft: "10%",
  },
  image: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10%",
  },
  content: {
    marginVertical: 1,
    // borderWidth: 1,
    // height: 350,
  },
  r: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: COLORS.Light.colorSeven,
    borderBottomWidth: 1,
  },
  rc1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "4%",
  },
  rc1a: {},
  rc2: {
    flex: 1,
  },
  rc2t1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven - 2,
    fontWeight: "400",
    marginBottom: 5,
  },
  rc2t2: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix - 1,
  },
  rc3: {
    // borderWidth: 1,
    alignItems: "flex-end",
  },
  rc3t1: {
    marginBottom: 5,
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix - 1,
  },
  rc3t2: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix - 1,
  },
  modalContainer: {
    backgroundColor: COLORS.Light.colorTwentyOne,
    flex: 1,
  },
  modalContent: {
    height: "65%",
    marginTop: "auto",
    backgroundColor: COLORS.Light.background,
    // backgroundColor: "transparent",
    borderRadius: 20,
    // borderWidth: 1,
    padding: 20,
    // alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    // backgroundColor: COLORS.Light.colorTwentyOne,
    // position: "absolute",
    // borderWidth: 1,
    // zIndex: 2,
  },
  modalHeader: {
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalImage: {
    // borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.Light.colorSeven,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 35,
  },
  modalHeaderText: {
    textAlign: "center",
    // borderWidth: 1,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
  },
  mr2: {
    marginVertical: 10,
  },
  mr2a: {
    paddingVertical: 15,
    borderTopColor: COLORS.Light.colorSeven,
    borderTopWidth: 1,
    borderBottomColor: COLORS.Light.colorSeven,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mr2ai: {
    flex: 1,
  },
  mr2ait1: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven - 2,
    fontWeight: "400",
    marginBottom: 8,
  },
  mr2ait2: {
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSix - 2,
  },
  mr2aii: {
    color: COLORS.Light.colorTwentyFive,
    fontSize: SIZES.sizeSeven - 2,
    fontWeight: "400",
  },
  mr2b: {},
  mr3: {
    marginVertical: 25,
    color: COLORS.Light.colorSix,
    textAlign: "center",
  },
  mr4: {
    marginTop: 10,
    marginBottom: 30,
  },
  btn1Container: { marginVertical: 25 },
  btn1: {
    borderRadius: 5,
  },
});
