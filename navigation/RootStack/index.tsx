import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootParamList, RootRoutes } from "../../shared/const/routerRoot";
import AuthStack from "../AuthStack";
import MainStack from "../MainStack";
import PlanStack from "../PlanStack";
import WalletStack from "../WalletStack";

const RootStack = createStackNavigator<RootParamList>();

const RootStackApp = (): React.ReactElement => {
  return (
    <RootStack.Navigator
      initialRouteName={RootRoutes.CreatePlan}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen component={AuthStack} name={RootRoutes.Auth} />
      <RootStack.Screen component={MainStack} name={RootRoutes.Main} />
      <RootStack.Screen component={PlanStack} name={RootRoutes.CreatePlan} />
      <RootStack.Screen component={WalletStack} name={RootRoutes.FundWallet} />
    </RootStack.Navigator>
  );
};

export default RootStackApp;
