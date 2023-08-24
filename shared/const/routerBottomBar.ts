import { StackScreenProps } from "@react-navigation/stack";

export enum Tabs {
  Home = "Home",
  Plans = "Plans",
  Wallet = "Wallet",
  Feed = "Feed",
  Account = "Account",
}

export type TabsNavigatorParamList = {
  [Tabs.Home]: undefined;
  [Tabs.Plans]: undefined;
  [Tabs.Wallet]: undefined;
  [Tabs.Feed]: undefined;
  [Tabs.Account]: undefined;
};

export type TabsScreenProps<RouteName extends Tabs> = StackScreenProps<
  TabsNavigatorParamList,
  RouteName
>;

export type TabOptions = {
  [key: string]: {
    label: string;
    icon: any;
    component: React.FC;
  };
};
