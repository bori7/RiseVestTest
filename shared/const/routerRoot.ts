import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import { CreatePlanParamList, CreatePlanRoutes } from "./routerCreatePlan";
import { AuthRoutes, AuthParamList } from "./routerAuth";
import { FundWalletRoutes, FundWalletParamList } from "./routerFundWallet";

export enum RootRoutes {
  Auth = "AuthStack",
  Main = "MainStack",
  CreatePlan = "CreatePlanStack",
  FundWallet = "FundWalletStack",
}

export type RootParamList = {
  [RootRoutes.Auth]?: {
    screen: AuthRoutes;
  };
  [RootRoutes.Main]: undefined;
  [RootRoutes.FundWallet]?: {
    screen: FundWalletRoutes;
  };
  [RootRoutes.CreatePlan]?: {
    screen: CreatePlanRoutes;
  };
};

export type RootScreenProps<RouteName extends RootRoutes> = StackScreenProps<
  RootParamList,
  RouteName
>;

export type RootNavigationProps = StackNavigationProp<
  RootParamList & AuthParamList & FundWalletParamList & CreatePlanParamList
>;

const screens = { ...AuthRoutes };

export type ScreensType = typeof screens;
