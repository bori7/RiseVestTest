import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum CreatePlanRoutes {
  Intro = "Intro",
  GoalName = "GoalName",
  TargetAmount = "TargetAmount",
  TargetDate = "TargetDate",
  Review = "Review",
  PlanDetails = "PlanDetails",
}

export type CreatePlanParamList = {
  [CreatePlanRoutes.Intro]: undefined;
  [CreatePlanRoutes.GoalName]: undefined;
  [CreatePlanRoutes.TargetAmount]: undefined;
  [CreatePlanRoutes.TargetDate]: undefined;
  [CreatePlanRoutes.Review]: undefined;
  [CreatePlanRoutes.PlanDetails]: undefined;
};

export type CreatePlanProps<RouteName extends CreatePlanRoutes> =
  StackScreenProps<CreatePlanParamList, RouteName>;

export type SettingsNavigationProps = StackNavigationProp<CreatePlanParamList>;
