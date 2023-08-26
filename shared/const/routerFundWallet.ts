import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum FundWalletRoutes {
  FundWallet = "FundWallet",
  ChooseFromPlans = "ChooseFromPlans",
  SelectBank = "SelectBank",
}

export type FundWalletParamList = {
  [FundWalletRoutes.FundWallet]: undefined;
  [FundWalletRoutes.ChooseFromPlans]: undefined;
  [FundWalletRoutes.SelectBank]: undefined;
};

export type FundWalletProps<RouteName extends FundWalletRoutes> =
  StackScreenProps<FundWalletParamList, RouteName>;

export type SettingsNavigationProps = StackNavigationProp<FundWalletParamList>;
