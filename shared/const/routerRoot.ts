import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import { CreatePlanParamList, CreatePlanRoutes } from "./routerCreatePlan";
import { AuthRoutes, AuthParamList } from "./routerAuth";
import { FundWalletRoutes, FundWalletParamList } from "./routerFundWallet";
import { MainParamList, MainRoutes } from "./routerMain";

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
  [RootRoutes.Main]?: {
    screen: MainRoutes;
    params: any;
  };
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
  RootParamList &
    AuthParamList &
    FundWalletParamList &
    CreatePlanParamList &
    MainParamList
>;

const screens = { ...AuthRoutes, ...FundWalletRoutes, ...CreatePlanRoutes };

export type ScreensType = typeof screens;
