import {
  ImageBackground,
  ImageURISource,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { Text, View } from "../../../components/Themed";
import {
  FundWalletProps,
  FundWalletRoutes,
} from "../../../shared/const/routerFundWallet";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, IMAGES, SIZES } from "../../../constants/Colors";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../../../services/Plans";
import {
  GetPlansItemType,
  GetPlansResponseType,
} from "../../../shared/types/queries";
import { useQuery } from "react-query";

type NavigationProps = FundWalletProps<FundWalletRoutes.ChooseFromPlans>;

interface Iprops {
  img: ImageURISource;
  txt1: string;
  txt2?: string;
  txt3?: string;
}

const CFP: React.FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();

  const userState = useSelector((state: RootState) => state.user);
  const { userLoading, userData, userError } = userState;

  const {
    data: plansData,
    isLoading,
    isError,
  } = useQuery<GetPlansResponseType>("getplans", () =>
    getPlans(userData?.token)
  );

  const planList: GetPlansItemType[] | undefined = plansData?.items;

  const plans: Iprops[] = [
    {
      img: IMAGES.PawIcon,
      txt1: "Plan a wedding",
      txt2: "$1,983.09",
      txt3: "",
    },
    {
      img: IMAGES.SabIcon,
      txt1: "Start a Business",
      txt2: "$1,983.09",
      txt3: "",
    },
    {
      img: IMAGES.BuildWealth,
      txt1: "Build Wealth",
      txt2: "$1,983.09",
      txt3: "Mixed assets",
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                navigation.navigate(FundWalletRoutes.FundWallet);
              }}
            >
              <Ionicons
                name="arrow-back-sharp"
                size={24}
                color={COLORS.Light.colorOne}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Choose from plans</Text>
          </View>
          <Text style={styles.subHeader}>
            {`${
              planList?.length
                ? "Tap on any of the plans to select"
                : "There no plans to select from"
            }`}
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scroll}
          >
            <View style={styles.plans}>
              {planList?.map((p, index) => (
                <TouchableOpacity
                  key={`#${index}`}
                  style={styles.plan}
                  onPress={() => {
                    navigation.navigate(FundWalletRoutes.SelectBank);
                  }}
                >
                  <ImageBackground
                    style={styles.planItem}
                    source={plans[Math.floor(Math.random() * plans.length)].img}
                    borderRadius={20}
                  >
                    <View style={styles.pDas}>
                      <View style={styles.pDa}>
                        <Text style={styles.planText}>{p.plan_name}</Text>
                        <Text
                          style={styles.planTextB}
                        >{`$${p.target_amount}`}</Text>
                        <Text style={styles.planText}>{""}</Text>
                      </View>
                      <View style={styles.pDb}>
                        <AntDesign
                          name="arrowright"
                          size={24}
                          color={COLORS.Light.background}
                        />
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CFP;

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
    marginRight: "10%",
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
  subHeader: {
    // borderWidth: 1,
    // flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    textAlign: "center",
    color: COLORS.Light.colorTwentyFour,
    fontSize: SIZES.sizeSeven - 1,
    marginBottom: 35,
  },
  plans: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // borderWidth: 1,
    // flex: 1,
  },
  plan: {
    // borderWidth: 1,
    marginBottom: 20,
  },
  planItem: {
    height: 210,
    // borderWidth: 1,
    width: 160,
    // borderRadius: 50,
    justifyContent: "flex-end",
    padding: 10,
    // resizeMode: "stretch",
  },
  planText: {
    color: COLORS.Light.background,
    fontSize: SIZES.sizeSix,
    fontWeight: "400",
  },
  planTextB: {
    color: COLORS.Light.background,
    fontSize: SIZES.sizeEight,
    fontWeight: "400",
    marginVertical: 3,
  },
  pDas: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pDa: {
    backgroundColor: "transparent",
    flex: 1,
  },
  pDb: {
    backgroundColor: "transparent",
  },
  scroll: {
    // borderWidth: 1,
    width: "100%",
    // marginTop: 10,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  scrollContent: {
    // borderWidth: 1,
    // width: "100%",
    // alignItems: "center",
    backgroundColor: "transparent",
    // marginBottom: 20,
  },
});
