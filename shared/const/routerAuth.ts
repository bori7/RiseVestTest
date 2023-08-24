import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum AuthRoutes {
  Welcome = "Welcome",
  QualityAssets = "QualityAssets",
  SuperiorSelection = "SuperiorSelection",
  BetterPerformance = "BetterPerformance",
  SignUp = "SignUp",
  TellUsMore = "TellUsMore",
  SignIn = "SignIn",
  SetPin = "SetPin",
}

export type AuthParamList = {
  [AuthRoutes.Welcome]: undefined;
  [AuthRoutes.QualityAssets]: undefined;
  [AuthRoutes.SuperiorSelection]: undefined;
  [AuthRoutes.BetterPerformance]: undefined;
  [AuthRoutes.SignUp]: undefined;
  [AuthRoutes.TellUsMore]: undefined;
  [AuthRoutes.SignIn]: undefined;
  [AuthRoutes.SetPin]: undefined;
};

export type AuthProps<RouteName extends AuthRoutes> = StackScreenProps<
  AuthParamList,
  RouteName
>;

export type AuthNavigationProps = StackNavigationProp<AuthParamList>;
