import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { FundWalletParamList, FundWalletRoutes } from "./routerFundWallet";
import { CreatePlanParamList, CreatePlanRoutes } from "./routerCreatePlan";
import { Tabs, TabsNavigatorParamList } from "./routerBottomBar";
import { AuthParamList, AuthRoutes } from "./routerAuth";
import { RootParamList, RootRoutes } from "./routerRoot";

export enum MainRoutes {
  Homepage = "Homepage",
  Success = "Success",
}

export type MainParamList = {
  [MainRoutes.Homepage]: undefined;
  [MainRoutes.Success]: {
    mainText: string;
    subText: string;
    btnText: string;
    toScreen: any;
    toSubScreen: any;
  };
};

export type MainProps<RouteName extends MainRoutes> = StackScreenProps<
  MainParamList,
  RouteName
>;

export type MainNavigationProps = StackNavigationProp<MainParamList>;

//  [screen: keyof MainParamList] | [screen: keyof MainParamList, params: { mainText: string; subText: string; btnText: string; toScreen: CreatePlanRoutes | ... 4 more ... | Tabs; } | undefined]'
//  [screen: keyof MainParamList] | [screen: keyof MainParamList, params: { mainText: string; subText: string; btnText: string; toScreen: [screen: keyof MainParamList] | [screen: ...]; } | undefined]'.
