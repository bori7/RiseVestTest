import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChooseFromPlans from "../../pages/FundWallet/ChooseFromPlans";
import FundWallet from "../../pages/FundWallet/FundWallet";
import SelectBank from "../../pages/FundWallet/SelectBank";
import {
  FundWalletParamList,
  FundWalletRoutes,
} from "../../shared/const/routerFundWallet";

const Wallet = createStackNavigator<FundWalletParamList>();

const WalletStack = (): React.ReactElement => {
  return (
    <Wallet.Navigator
      initialRouteName={FundWalletRoutes.FundWallet}
      screenOptions={{ headerShown: false }}
    >
      <Wallet.Screen
        component={FundWallet}
        name={FundWalletRoutes.FundWallet}
        options={{ headerShown: false }}
      />
      <Wallet.Screen
        component={ChooseFromPlans}
        name={FundWalletRoutes.ChooseFromPlans}
        options={{ headerShown: false }}
      />
      <Wallet.Screen
        component={SelectBank}
        name={FundWalletRoutes.SelectBank}
        options={{ headerShown: false }}
      />
    </Wallet.Navigator>
  );
};

export default WalletStack;
