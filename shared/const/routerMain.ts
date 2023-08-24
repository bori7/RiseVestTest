import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

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
  };
};

export type MainProps<RouteName extends MainRoutes> = StackScreenProps<
  MainParamList,
  RouteName
>;

export type MainNavigationProps = StackNavigationProp<MainParamList>;
